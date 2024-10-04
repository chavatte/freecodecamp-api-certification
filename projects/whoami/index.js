function getWhoamiData(req) {
  const ipaddress = req.ip;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];

  return { ipaddress, language, software };
}

module.exports = { getWhoamiData };
