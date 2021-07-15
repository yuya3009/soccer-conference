'use strict';

$.ajax({
  headers: { 'X-Auth-Token': 'APIキー' },
  url: 'http://api.football-data.org/v2/matches?status='LIVE',
  dataType: 'json',
  type: 'GET',
}).done(function(response) {
  console.log(response);
});

$.getJSON('https://api.football-data.org/v2/competitions/CL/matches', function(data_cl) {
  //JSON取得後の処理
  matches = data_cl.matches[0].table;
  //順位表にデータを入れる
  matches.forEach(function(match) {
    $('#cl-match').append(
      '<tr align="center">'
      + '<td>' + match.team + '</td>'
      + '<td>' + match.time + '</td>'
    )
  })
})