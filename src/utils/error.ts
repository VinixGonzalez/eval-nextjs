export const errorManager = (
  errors: [{ message: Array<string> }]
): { code: string; message: string }[] => {
  const errorsMapped = errors.flatMap((error) =>
    error.message.map((msg) => {
      return {
        code: msg.substring(0, 10),
        message: msg.substring(11, msg.length),
      };
    })
  );
  return errorsMapped;
};
