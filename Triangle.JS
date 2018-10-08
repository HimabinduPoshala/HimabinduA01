function triangle (rows) {

    if (rows <= 0){
      return 0;
    }
    return rows + triangle(rows-1)
  }


function show(){
  let res = triangle(parseInt(document.getElementById('rows').value))
;
document.getElementById('result').innerHTML = res
}