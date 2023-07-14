function formatDateTime(date) {
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Colombo'
    };

    return date.toLocaleString('en-US', options);
}

  // Function to update the content of the div
function updateDateTime() {
    var currentDate = new Date();
    var formattedDateTime = formatDateTime(currentDate);
    document.getElementById('current-time').textContent = formattedDateTime;
  }

  // Update the content immediately and then every second
  updateDateTime();
  setInterval(updateDateTime, 1000);

   // Function to extract words within double quotation marks
function extractQuotedWords(sentence) {
    var regex = /"([^"]*)"/;
    var matches = regex.exec(sentence);
    if (matches && matches.length > 1) {
      return matches[1];
    } else {
      return '';
    }
}
