import { sendResponse } from './response.js';

function normalizePublishedAt(payload) {
  if (!payload.publishedAt && !payload.publishDate) return payload;
  return { ...payload, publishedAt: payload.publishedAt || payload.publishDate };
}

export const createCrudController = (Model, defaultSort = { createdAt: -1 }, filterBuilder = null) => ({
  async getAll(req, res, next) {
    try {
      const filter = filterBuilder ? filterBuilder(req) : {};
      const data = await Model.find(filter).sort(defaultSort);
      sendResponse(res, { data });
    } catch (error) { next(error); }
  },
  async getById(req, res, next) {
    try {
      const data = await Model.findById(req.params.id);
      sendResponse(res, { data });
    } catch (error) { next(error); }
  },
  async create(req, res, next) {
    try {
      const payload = normalizePublishedAt({ ...req.body });
      if (req.file) payload.fileUrl = `/uploads/documents/${req.file.filename}`;
      const data = await Model.create(payload);
      sendResponse(res, { statusCode: 201, message: 'Created successfully', data });
    } catch (error) { next(error); }
  },
  async update(req, res, next) {
    try {
      const payload = normalizePublishedAt({ ...req.body });
      if (req.file) payload.fileUrl = `/uploads/documents/${req.file.filename}`;
      const data = await Model.findByIdAndUpdate(req.params.id, payload, { new: true, runValidators: true });
      sendResponse(res, { message: 'Updated successfully', data });
    } catch (error) { next(error); }
  },
  async remove(req, res, next) {
    try {
      await Model.findByIdAndDelete(req.params.id);
      sendResponse(res, { message: 'Deleted successfully' });
    } catch (error) { next(error); }
  },
});
