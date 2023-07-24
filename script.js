function formatDateTime(date) {
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Seoul'
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

var pages = document.getElementsByClassName('page');
var currentPageIndex = 0;

function showCurrentPage() {
  // Hide all pages
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }

  // Show the current page
  pages[currentPageIndex].style.display = 'flex';

  // Increment the current page index
  currentPageIndex = (currentPageIndex + 1) % pages.length;
}

// Initial display of the first page
showCurrentPage();

// Show a new page every 3 minutes
setInterval(showCurrentPage, 60000); // 180000 milliseconds = 3 minutes


var heads = document.getElementsByClassName('hed');
var currentHedIndex = 0;

function showCurrentHed() {
  // Hide all pages
  for (var i = 0; i < heads.length; i++) {
    heads[i].style.display = 'none';
  }

  // Show the current page
  heads[currentHedIndex].style.display = 'flex';

  // Increment the current page index
  currentHedIndex = (currentHedIndex + 1) % heads.length;
}

// Initial display of the first page
showCurrentHed();

// Show a new page every 3 minutes
setInterval(showCurrentHed, 60000); // 180000 milliseconds = 3 minutes






