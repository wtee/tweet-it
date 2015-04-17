/* This is free and unencumbered software released into the public domain
 * under the terms of the Unlicense <http://unlicense.org>
 *
 * If you make modifications, please consider releasing your work
 * into the public domain as well. If you wish to contribute back
 * to this project, your code must be released into the public
 * domain through use of the Unlicense.
 */

(function() {
  // Set up the button and attach it to the page
  var share_text = '',
      share_btn = document.createElement('div'),
      btn_logo = document.createElement('img');

  share_btn.setAttribute('id', 'share-button');
  btn_logo.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAYAAADWm14/AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH3gsZFhkawOhxWwAAA9hJREFUSMetV02LHFUUPedN90QRNC7UzCKRsaqjLiKIuNCMRhld+ANiV89MlaCLgCAIiQs3bl0IuhJRQbGrZqwG3fgRN0E0AYkrAyMRkqrEYAyokehERBOrjot5L7zumZ7p1rnQ0FX9qu6555770ZxfOoXFud0AgIX3TyPrtDCOxXmBNAqR9MrrJO0DcEDSLMkbAJwE0AXwQRqF3w88dzeAM7SOd5F8Io3CN5NeiW47GMm5A5z0yilJSyQfkQQAIAkAsNdXJD1P8jDJByTNAJgmuZ8AkPTKpyW9TfJQtx28Ng4TUfodm83mJQA3kZS9TUkgCa0iIICa5Iqk6wE0Jc1mndYXxqLcBcBIejXOi2ed8zgvNgUwOTn5ruec9nONAa4aSBpJ2wFsk7RA8lycFy827Hua7gEAr8d5sVfSQhqFcjlej36S0wAeJSlJ9EBsZD8BeAnAjQBmjEVZewcEYI7kj0mvnHHOB9nIOi2QvNOyRxvAhs4twFtJTpN8LI3Csw2bggsk/5HUcJRJ2lHX9bE4LxYBvCXpBIAV/4WSttuz8BgcapLcoR3ddvBbnBdwVTBF8izJSXtIHmpaJX8N4CsA3wL4pqqqkxMTEzMAjoxIvauIq2kUTrpqo5fTeWNMtnpO9CNySra5rmzKaknG6oejVIwFcDGNwlvcvUbSKynpfknHJXUBJIMROQeW6oYPyJacRgUBYNm/MN12IABtAMsk7yV5xcvVoIjol5ZXchyjeX7WB8BGdppkE8AeSU1fA1tlliUA+HgNAAAfAfjdo5Jb7d8KaEXSn30A4rxA1mldIBlJcvmU6+lbFL2rpBMkL/UBSKMQcV6g2w6OGGMeBoC6rj3daSuol23Hx9MovLwmBXacotsOjkl6kOSXkv4aX1/DhSvpj6qqXlnz+8CM3inpMMkJAIFtTPofKGRLl5KW0iicHzxgBk7/TLIAcJd1jv8qSK9XUNLlNArnk16JDQFkndbfkg5K+sE6lzfjx6Zeq1aRnAOw7qJjBterrNM6A2AvgHf8+W6D0ujBw3XTpW47+GTYbtEHwI1eY8z5NAqfIbkbQFrXdWmlwDGCJ8nlNAqTpFeuu1Osy4BPVVVVv9ppd/sYuXe6+bzbDu7ZFO2QTddIepnkUwBu83rCUBKs2t1wesMY89x7T95RbbbkMs6L/ZICkjcDuM9+3KIhn88BZ329xub8qqTHs07r6KjbtSH5IclfSO6RNOs575t+g51N0jW6JZ2X9IKkqazTOhrnBeq6Hq1a3JekV26TtBPAQ3Yn2DeMcuv8HMlFAJ9KOpV1Whf9Pyqj2r9b51DxpCUNpwAAAABJRU5ErkJggg==');
  share_btn.appendChild(btn_logo);
  document.body.appendChild(share_btn);

  function getSelectedText() {
    var sel,
        range;

    if (window.getSelection) {
      sel = window.getSelection();
      range = sel.getRangeAt(0);
    } else if (document.selection) {
      range = document.selection.createRange();
    }

    if (!range.collapsed) {
      return range + " " + document.URL;
    }
    return '';
  }

  // Show the share button if text has been selected
  function showBtn(e) {
    share_text = getSelectedText();

    if (share_text.length !== 0) {
      share_btn.style.left = e.pageX + 10 + 'px';
      share_btn.style.top = e.pageY - 15 + 'px';
      share_btn.style.display = 'block';
      return;
    }

    share_btn.style.display = 'none';
  }

  function openShareDialog(e) {
    share_btn.style.display = 'none';
    window.open('https://twitter.com/intent/tweet?text=' + share_text, 'shareWindow', 'width=500,height=250,top=50,left=50');
  }

  document.addEventListener('mouseup', showBtn, false);
  document.addEventListener('touchend', showBtn, false);

  share_btn.addEventListener('mousedown', openShareDialog, false);
  share_btn.addEventListener('touchstart', openShareDialog, false);
})();
