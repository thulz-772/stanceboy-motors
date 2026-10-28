document.addEventListener('DOMContentLoaded', function() {

    // ===== FORM VALIDATION - FROM ENQUIRY.HTML ===== //
    function showError(input, message) {
        removeError(input);
        const error = document.createElement('small');
        error.classList.add('error-message');
        error.style.color = '#ff1a1a';
        error.style.display = 'block';
        error.style.marginTop = '5px';
        error.innerText = message;
        input.parentNode.insertBefore(error, input.nextSibling);
        input.style.borderColor = '#ff1a1a';
    }

    function removeError(input) {
        const error = input.nextElementSibling;
        if(error && error.classList.contains('error-message')) {
            error.remove();
        }
        input.style.borderColor = '#444';
    }

    const enquiryForm = document.querySelector('section:nth-of-type(1) form');
    if(enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const service = document.getElementById('service');
            const message = document.getElementById('message');

            if(name.value.trim().length < 2) { showError(name, 'Please enter your full name'); isValid = false; } else { removeError(name); }
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailPattern.test(email.value)) { showError(email, 'Please enter a valid email'); isValid = false; } else { removeError(email); }
            if(service.value === '') { showError(service, 'Please select a service'); isValid = false; } else { removeError(service); }
            if(message.value.trim().length < 10) { showError(message, 'Please tell us more - min 10 characters'); isValid = false; } else { removeError(message); }

            if(isValid) {
                alert('✅ Enquiry sent! We will contact you within 24 hours. - StanceBoy Motors');
                enquiryForm.reset();
            }
        });
    }

    const volunteerForm = document.querySelector('section:nth-of-type(2) form');
    if(volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            const volName = document.getElementById('vol_name');
            const volEmail = document.getElementById('vol_email');
            const interest = document.querySelector('input[name="interest"]:checked');

            if(volName.value.trim().length < 2) { showError(volName, 'Please enter your full name'); isValid = false; } else { removeError(volName); }
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailPattern.test(volEmail.value)) { showError(volEmail, 'Please enter a valid email'); isValid = false; } else { removeError(volEmail); }
            if(!interest) { alert('⚠️ Please select Sponsorship or Volunteering'); isValid = false; }

            if(isValid) {
                alert('✅ Application received! We love car people. We will be in touch. - StanceBoy Crew');
                volunteerForm.reset();
            }
        });
    }

    // ===== GALLERY LIGHTBOX - FOR INDEX.HTML ===== //
    const galleryImages = document.querySelectorAll('.gallery-img');
    if(galleryImages.length > 0) {
        // Create lightbox elements
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `<span class="close">&times;</span><img src="" alt="">`;
        document.body.appendChild(lightbox);

        const lightboxImg = lightbox.querySelector('img');
        const closeBtn = lightbox.querySelector('.close');

        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                lightbox.style.display = 'flex';
                lightboxImg.src = this.src;
                lightboxImg.alt = this.alt;
            });
        });

        closeBtn.addEventListener('click', function() {
            lightbox.style.display = 'none';
        });

        lightbox.addEventListener('click', function(e) {
            if(e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }

});