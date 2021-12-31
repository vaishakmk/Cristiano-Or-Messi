const questions = [
    ['degea.jpeg','janoblak.jpeg', 'De Gea or Jan Oblak', 'De Gea' , 'Jan Oblak'],
    ['ramos.jpeg','puyol.jpeg', 'Sergio Ramos or Carlos Puyol', 'Sergio Ramos' , 'Carlos Puyol'],
    ['deligt.jpeg','vandijk.jpeg', 'De Ligt or Van Dijk', 'De Ligt' , 'Van Dijk'],
    ['marcelo.jpeg','alves.jpeg', 'Marcelo or Dani Alves', 'Marcelo' , 'Dani Alves'],
    ['kimmich.jpeg','kante.jpeg', 'Joshua Kimmich or Ngolo Kante', 'Joshua Kimmich' , 'Ngolo Kante'],
    ['lewy.jpeg','benzema.jpeg', 'Lewandowski or Benzema', 'Lewandowski' , 'Benzema'],
    ['bruno.jpeg','debruyne.jpeg', 'Bruno Fernandes or Kevin DeBruyne', 'Bruno Fernandes' , 'Kevin DeBruyne'],
    ['haaland.jpeg','mbappe.jpeg', 'Erling Haaland or Kylian Mbappe', 'Erling Haaland' , 'Kylian Mbappe'],
    ['kroos.jpeg','iniesta.jpeg', 'Kroos or Iniesta', 'Kroos' , 'Iniesta'],
    ['salah.jpeg','neymar.jpeg', 'Salah or Neymar', 'Salah' , 'Neymar']
];


function populateResults() {
    $('#results').empty();
    let rating = 0;
    questions.forEach((question, index) => {
        $('#results').append(`
        <tr>
        <td>${question[2]}</td>
        <td>${question[window.localStorage.getItem(index)]}</td>
        </tr>
    `)
    rating =  rating + parseInt(window.localStorage.getItem(index),10);
});
rating/=10;
if (rating===3.5){
    $('#results').append(` <h1> Both messi and CR7 </h1> 
    <img src="images/both.jpeg" alt="Computer man" style="width:400px;height:300px;">
    `)
}
else if(rating > 3.5){
    $('#results').append(` <h1> Messi </h1> 
    <img src="images/messi.jpeg" alt="Computer man" style="width:400px;height:300px;">
    `)
}
else if(rating < 3.5){
    $('#results').append(` <h1> Cristiano </h1> 
    <img src="images/cristiano.jpeg" alt="Computer man" style="width:400px;height:300px;">
    `)
}
}

function yes(questionNo) {
    window.localStorage.setItem(questionNo, '3')
    if (questionNo === 9) {
        populateResults();
    }
}

function no(questionNo) {
    window.localStorage.setItem(questionNo, '4')
    if (questionNo === 9) {
        populateResults();
    }
}


window.onload = () => {
    window.localStorage.clear();
    $('#results').empty();
    let count = 2;
    questions.forEach(question => {
        $('body').append(`
        <div data-role = "page" data-dialog="true" name="dialog" id = "page${count}" >
             <div data-role = "header" >
                <h2>Question ${count-1}</h2>
                </div>
                <h3 style="text-align:center">${question[2]}</h3>
                <div data-role = "main" class = "ui-content" data-type="horizontal" style="display:flex;padding:10px;float:center;">
                <div style="padding:10px"><a href = "#page${count + 1}" onclick="yes(${count - 2})">
                   <img src="images/${question[0]}" alt="Computer man" style="width:220px;height:180px;">
                   </a></div>
                  <div style="padding:10px"><a href = "#page${count + 1}" onclick="no(${count - 2})">
                   <img src="images/${question[1]}" alt="Computer man" style="width:220px;height:180px;">
                   </a></div>
                </div>
   
             <div data-role = "footer">
                <h2>FIFA 2022 Inc.</h2>
             </div>
          </div>
        `)
        count++;
    })

}
