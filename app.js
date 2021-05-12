(function($) {

  'use strict';

  $.ajax({
    url: 'https://gist.githubusercontent.com/Matias-01/494aa79e69eb0dc72b3d66b7c4498e1e/raw/42c9c210bb6f050b1057fdbd1a4d429ca17d6960/MOCK_DATA.csv',
    dataType: 'text',
  }).done(successFunction);

  function successFunction(data) {
    var allRows = data.split(/\r?\n|\r/);
    var table = '<table>';
    for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
      if (singleRow === 0) {
        table += '<thead>';
        table += '<tr>';
      } else {
        table += '<tr>';
      }
      var rowCells = allRows[singleRow].split(',');
      for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
        if (singleRow === 0) {
          table += '<th>';
          table += rowCells[rowCell];
          table += '</th>';
        } else {
          table += '<td>';
          table += rowCells[rowCell];
          table += '</td>';
        }
      }
      if (singleRow === 0) {
        table += '</tr>';
        table += '</thead>';
        table += '<tbody>';
      } else {
        table += '</tr>';
      }
    }
    table += '</tbody>';
    table += '</table>';
    $('body').append(table);
  }

  // });

})(jQuery);