// /.netlify/functions/yep

exports.handler = (event, context) => {
  //event = Express Request object (similar)
  console.log(event);
  let steve = process.env.STEVE;

  return {
    statusCode: 200,
    body: JSON.stringify(`Yep. yep. yep. ${steve}`),
  };
};