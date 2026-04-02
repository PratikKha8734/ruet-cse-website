import bcrypt from 'bcryptjs';
import { Admin } from './auth.model.js';
import { signToken } from '../../utils/jwt.js';

const sanitizeAdmin = (admin) => ({
  _id: admin._id,
  name: admin.name,
  email: admin.email,
  role: admin.role,
  createdAt: admin.createdAt,
});

export const authService = {
  async register(payload) {
    const exists = await Admin.findOne({ email: payload.email });
    if (exists) throw new Error('Admin already exists with this email');
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    const admin = await Admin.create({ ...payload, password: hashedPassword });
    const token = signToken({ id: admin._id, email: admin.email, role: admin.role });
    return { admin: sanitizeAdmin(admin), token };
  },
  async login(payload) {
    const admin = await Admin.findOne({ email: payload.email });
    if (!admin) throw new Error('Invalid credentials');
    const ok = await bcrypt.compare(payload.password, admin.password);
    if (!ok) throw new Error('Invalid credentials');
    const token = signToken({ id: admin._id, email: admin.email, role: admin.role });
    return { admin: sanitizeAdmin(admin), token };
  },
  async me(id) {
    const admin = await Admin.findById(id);
    if (!admin) throw new Error('Admin not found');
    return sanitizeAdmin(admin);
  },
};
