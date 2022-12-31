function calculate_weights(){
    let weight = document.getElementById('weight').value;
    weight = parseFloat(weight);
    if (isNaN(weight)){
        weight = 0;
        document.getElementById('alert').innerHTML = 'Enter a valid weight before calculate your weight!';
    }
    else {
    document.getElementById('Mercurio').innerHTML = parseInt(weight*3.7/10);
    document.getElementById('Venus').innerHTML = parseInt(weight*8.87/10);
    document.getElementById('Tierra').innerHTML = parseInt(weight);
    document.getElementById('Luna').innerHTML = parseInt(weight*1.62/10);
    document.getElementById('Marte').innerHTML = parseInt(weight*3.71/10);
    document.getElementById('Jupiter').innerHTML = parseInt(weight*24.79/10);
    document.getElementById('Saturno').innerHTML = parseInt(weight*10.44/10);
    document.getElementById('Urano').innerHTML = parseInt(weight*8.87/10);
    document.getElementById('alert').innerHTML = 'Discover your weight in other planets!';
    }
}