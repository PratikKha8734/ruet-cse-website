import { authService } from './auth.service.js';
import { sendResponse } from '../../utils/response.js';

export const authController = {
  async register(req, res, next) {
    try {
      sendResponse(res, { statusCode: 201, data: await authService.register(req.body) });
    } catch (error) {
      next(error);
    }
  },
  async login(req, res, next) {
    try {
      sendResponse(res, { data: await authService.login(req.body) });
    } catch (error) {
      next(error);
    }
  },
  async me(req, res, next) {
    try {
      sendResponse(res, { data: await authService.me(req.user.id) });
    } catch (error) {
      next(error);
    }
  },
};
