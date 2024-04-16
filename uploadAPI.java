public static ClientResponse SendSimpleMessage() {
	Client client = Client.create();
	client.addFilter(new HTTPBasicAuthFilter("api", "<PRIVATE_API_KEY>"));
	WebResource webResource = client.resource("https://api.mailgun.net/v3/sandbox395c41621d1d4803986b3e25ee9aadcc.mailgun.org/messages");
	MultivaluedMapImpl formData = new MultivaluedMapImpl();
	formData.add("from", "Mailgun Sandbox <postmaster@sandbox395c41621d1d4803986b3e25ee9aadcc.mailgun.org>");
	formData.add("to", "Mehma Mand <mm126@stmarys-ca.edu>");
	formData.add("subject", "Hello Mehma Mand");
	formData.add("text", "Congratulations Mehma Mand, you just sent an email with Mailgun! You are truly awesome!");
	return webResource.type(MediaType.APPLICATION_FORM_URLENCODED).
		post(ClientResponse.class, formData);

// You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

// You can send up to 300 emails/day from this sandbox server.
// Next, you should add your own domain so you can send 10000 emails/month for free.
