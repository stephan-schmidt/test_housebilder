// Household builder


var housholdList = document.querySelector(".household");
var debuggerList = document.querySelector(".debug");

// Build up the list

var liststorage = window.localStorage;
viewL ();

for (const [key, value] of Object.entries(liststorage)) {
  var temp = JSON.parse(value);
  housholdList.innerHTML+= "<li class='member' valm='"+key+"'>"+temp['age']+" | "+temp['rel']+" | X </li>";
}


// get Age value
var inputAge = 0;
var inputAgeEl = document.querySelector("input[name]");
const ageHandler = function(e) {
  inputAge = e.target.value;
}
inputAgeEl.addEventListener('input', ageHandler)

// get Relationship value
var selectRvar = '';
var selectR = document.querySelector("select");
const selectRhandler = function(e) {
  selectRvar = e.target.options[e.target.selectedIndex].innerText;
}
selectR.addEventListener('change', selectRhandler);

// add Row btn
var addBtn = document.querySelectorAll('button.add');
addBtn[0].onclick = function() {
    valNum();
}

// submit btn
var submitBtn = document.querySelectorAll('button[type]');
submitBtn[0].onclick = function() {
    viewL();

}

/// adds to the list

function addPfunc ()
{
  var obj = {};
  obj['age'] = inputAge;
  obj['rel'] = selectRvar;

var receiveddata = JSON.stringify(obj);
window.localStorage.setItem(inputAge+selectRvar, receiveddata);


}

// get element to delete
document.addEventListener('click', function(e) {
    var target = e;
    remPfunc (target)

}, false);
function remPfunc (el)
{

  if (el.target.className == 'member'){
    console.log(el.target.attributes[1].value);
window.localStorage.removeItem(el.target.attributes[1].value);
    window.location.reload();
  }

}

/// validiert ager
function valNum ()
{

  if (inputAge>0 && inputAge!='' && !isNaN(inputAge)==true)
  {
      valSel();
  }else
  {
      alert('Please enter a valid Age.'); return false;
  }



}
/// validate selection

function valSel ()
{

  if (selectRvar != '' && selectRvar != '---')
  {
    addPfunc ();
  }
  else
  {
    alert('Please select a Relationship.'); return false;
  }
}

function viewL ()
{



        var viewList = []
        for (const [key, value] of Object.entries(liststorage)) {
          var temp = JSON.parse(value);
          viewList.push(value);

        }
        
        debuggerList.innerHTML = "[" + viewList +"]";



}

