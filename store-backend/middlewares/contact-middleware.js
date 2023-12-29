const validateContact = (schma) => async (req, res, next) => {
  try {
    const parseBody = await schma.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};
module.exports = validateContact;
