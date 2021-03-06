"use strict";

module.exports.add = async (event) => {
  let { num1, num2 } = JSON.parse(event.body);
  console.log("clg",{ ans: num1 + num2 });
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "add numbers", 
        num1,
        num2,
        sum: num1 + num2,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
