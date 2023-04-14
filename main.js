// select the form element and the container for enrolled students 
const form = document.querySelector('form');
const cardContainer = document.getElementById('cardContainer');
const preview = document.getElementById('preview');

// add event listener to the form 
form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the default form submission 
    // get the values of the form inputs 

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const dateOfBirth = form.date_of_birth.value;
    const gender = form.gender.value;
    const website = form.website.value;
    const photo = preview.src; // get the source of the preview image 

    const html = form.html.checked;
    const css = form.css.checked;
    const javascript = form.javascript.checked;

    // create a card for the enrolled student 

    const card = document.createElement('div');
    card.classList.add('card');


    const img = document.createElement('img');
    img.src = photo;
    img.alt = name;
    img.width = 200; // set the width of the image to 200 pixels 


    const studentInfo = document.createElement('div');
    studentInfo.classList.add('student-info');


    const studentName = document.createElement('h3');
    studentName.textContent = name;


    const studentEmail = document.createElement('p');
    studentEmail.textContent = email;


    const studentSkills = document.createElement('p');
    studentSkills.textContent = `Skills:${html?'HTML':''}${css?'CSS':''}${javascript?'JavaScript':''}`;


    studentInfo.appendChild(studentName);
    studentInfo.appendChild(studentEmail);
    studentInfo.appendChild(studentSkills);


    card.appendChild(img);
    card.appendChild(studentInfo);


    cardContainer.appendChild(card);

    // reset the form inputs 

    form.reset();

    // reset the preview image 

    preview.src = '#';
    preview.style.display = 'none';
});

// add event listener to the photo input 
photo.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', function() {
            preview.src = reader.result;
            preview.style.display = 'block';
        });
        reader.readAsDataURL(file);
    } else {
        preview.src = '#';
        preview.style.display = 'none';
    }
});