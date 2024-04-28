import { Request, Response } from 'express';
import controller from '../src/controllers/post.controller';

jest.mock('../src/repositories/post.repository', () => ({
  PrismaPostRepository: jest.fn().mockImplementation(() => ({
    createPost: jest
      .fn()
      .mockResolvedValue({
        id: 1,
        title: 'Test Title',
        content: 'Test Content',
      }),
  })),
}));

describe('createBlogPost', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = {
      body: {
        title: 'Test Title',
        content: 'Test Content',
      },
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('should create a blog post', async () => {
    await controller.createBlogPost(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      id: 1,
      title: 'Test Title',
      content: 'Test Content',
    });
  });
});
