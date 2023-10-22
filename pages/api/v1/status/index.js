function status(request, response) {
  response.status(200).json({ status: "Okay" });
}

export default status;
