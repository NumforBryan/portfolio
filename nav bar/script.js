document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    
    // Toggle the display property
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'contents'; // Show the menu
    } else {
        menu.style.display = 'none'; // Hide the menu
    }
});

document.getElementById('profile-toggle').addEventListener('click', function() {
    const menu = document.getElementById('profile');

    
    // Toggle the display property
    if (profile.style.display === 'none' || profile.style.display === '') {
        profile.style.display = 'contents'; // Show the menu
    } else {
        profile.style.display = 'none'; // Hide the menu
        
    }
});
document.getElementById('main-profile').addEventListener('click', function() {
    const menu = document.getElementById('profile1');

    
    // Toggle the display property
    if (profile1.style.display === 'none' || profile1.style.display === '') {
        profile1.style.display = 'block'; // Show the menu
    } else {
        profile1.style.display = 'none'; // Hide the menu
        
    }
});


