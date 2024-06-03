const express = require('express');
const router = express.Router();
const utils = require('../utils');

router.get('/list', (req, res, next) => {
  // 从请求中获取分页信息
  const { page = 1, pageSize = 20 } = req.query
  res.json(utils.mock(
    {
      [`list|${pageSize}`]: [
        {
          'id|+1': (page - 1) * pageSize + 1,
          username: '@last(6,10)',
          nickname: '@ctitle(3,7)',
          avatar: '@img(64x64,@color,avatar)',
          birthday: '@date()',
          'sex|1': [0, 1],
          email: '@email',
          phone: '@string("number",11)',
          address: '@county(true)',
          createdAt: '@datetime()',
        }
      ],
      total: `@integer(${page * pageSize},300)`,
      page,
      pageSize
    }
  ))
});

router.post('/new', (req, res) => {
  res.status(201).json({ msg: '新的篇章，即将开始' });
});

module.exports = router;
