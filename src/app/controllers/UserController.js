import User from '../models/User';

class UserController {
  async store(req, res) {
    const { id, name, email } = await User.create(req.body);

    return res.json({ id, name, email });
  }

  async update(req, res) {
    return res.json('ok');
  }
}

export default new UserController();
