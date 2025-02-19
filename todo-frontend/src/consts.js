import "react";

const url = "http://davesothertodos-env.eba-vkrtpjci.eu-west-1.elasticbeanstalk.com/";
// ensure trailing / is removed
export const API_URL = url.replace(/\/$/, "");
