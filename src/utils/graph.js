import { Client } from '@microsoft/microsoft-graph-client';

export const getGraphClient = (accessToken) =>
  Client.init({
    authProvider: (done) => {
      done(null, accessToken);
    },
  });

export const getEvents = async (client) => {
  const events = await client
    .api('/me/events')
    .select('id,subject,start,end,attendees,webLink,isAllDay,bodyPreview,body,location')
    .get();
  return events.value;
};

export const createEvent = async (client, event) => client.api('/me/events').post(event);

export const updateEvent = async (client, eventId, updatedData) =>
  client.api(`/me/events/${eventId}`).patch(updatedData);

export const deleteEvent = async (client, eventId) => client.api(`/me/events/${eventId}`).delete();

export const getInboxMails = async (client) => {
  const mails = await client
    .api('/me/mailFolders/inbox/messages')
    .select('id,subject,from,toRecipients,bodyPreview,receivedDateTime,isRead')
    .orderby('receivedDateTime DESC')
    .get();
  return mails.value;
};

export const getSentMails = async (client) => {
  const mails = await client
    .api('/me/mailFolders/sentitems/messages')
    .select('id,subject,from,toRecipients,bodyPreview,receivedDateTime,isRead')
    .orderby('receivedDateTime DESC')
    .get();
  return mails.value;
};

export const getTrashMails = async (client) => {
  const mails = await client
    .api('/me/mailFolders/deleteditems/messages')
    .select('id,subject,from,toRecipients,bodyPreview,receivedDateTime,isRead')
    .orderby('receivedDateTime DESC')
    .get();
  return mails.value;
};

export const getSpamMails = async (client) => {
  const mails = await client
    .api('/me/mailFolders/junkemail/messages')
    .select('id,subject,from,toRecipients,bodyPreview,receivedDateTime,isRead')
    .orderby('receivedDateTime DESC')
    .get();
  return mails.value;
};

export const sendMail = async (client, mailData) => {
  const mail = {
    message: {
      subject: mailData.subject,
      body: {
        contentType: 'HTML',
        content: mailData.body,
      },
      toRecipients: mailData.toRecipients.map((email) => ({ emailAddress: { address: email } })),
    },
    saveToSentItems: 'true',
  };

  return client.api('/me/sendMail').post({ message: mail.message, saveToSentItems: true });
};

export const moveMailToFolder = async (client, mailId, destinationFolderId) =>
  client.api(`/me/messages/${mailId}/move`).post({ destinationId: destinationFolderId });

export const moveToTrash = async (client, mailId) => {
  const trashFolder = await client.api('/me/mailFolders/deleteditems').get();
  return moveMailToFolder(client, mailId, trashFolder.id);
};

export const getMailFolders = async (client) => {
  const folders = await client.api('/me/mailFolders').get();
  return folders.value;
};
