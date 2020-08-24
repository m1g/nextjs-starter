export default (req, res) => {
  /*
   * Middleware included to parse the incoming request 'req'
   * req.cookies
   * req.query
   * req.body
   */

  /*
   * Express-like helper functions for the response 'res'
   * res.status(200);
   * res.json({});
   * req.send('HTTP response');
   */

  return res.status(200).json([
    {
      id: 1,
      email: 'miguel@email.com',
      name: 'miguel',
    },
  ]);
};
