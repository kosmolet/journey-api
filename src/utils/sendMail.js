const sgMail = require('@sendgrid/mail');

const { EMAIL_FROM, SGTEMPLATE_RESET_PASSWORD, DOMAIN } = process.env;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendVerifyEmail = async (data) => {
  try {
    const { to, name } = data;
    const urlReset = `${DOMAIN}${data.resetPath}`;

    const msg = {
      to,
      from: EMAIL_FROM,
      templateId: SGTEMPLATE_RESET_PASSWORD,
      dynamicTemplateData: {
        name,
        urlReset,
      },
    };

    await sgMail.send(msg);
    logger.debug(`Email was sent to ${msg.to}`);
  } catch (err) {
    logger.debug('Email was NOT sent', err.message);

    throw new Error(err);
  }
};

module.exports = sendVerifyEmail;
