export const successRespones = ({
  res,
  message = "Done",
  statusCode = 200,
  data,
}) => {
  return res.status(statusCode).json({ message, data });
};
