const softSkills = [
    {
        title: 'Communication',
        description: 'Comfortable presenting to stakeholders and able to effectively articulate technical concepts to non-technical team members.'
    },
    {
        title: 'Collaboration',
        description: 'Experience working in diverse teams to accomplish common goals. Comfortable with pair programming and code reviews.'
    },
    {
        title: 'Problem-solving',
        description: 'Strong analytical skills with the ability to quickly learn new technologies and solve complex problems.'
    },
    {
        title: 'Time Management',
        description: 'Proficient in managing multiple projects simultaneously while maintaining keen attention to detail.'
    },
    {
        title: 'Adaptability',
        description: 'Embrace changing environments and technologies. Able to learn and implement new tools and skills quickly.'
    },
    {
        title: 'Leadership',
        description: 'Experience leading project teams, facilitating discussions, and encouraging collaboration.'
    },
    {
        title: 'Passion for Technology',
        description: 'Deep love for creating software and using technology to solve problems. Continually learning and staying updated with latest industry trends.'
    }
];

const skills = [
    {
      name: "Python",
      description: "Experienced in writing Python scripts for desktop application development, data analysis, and machine learning."
    },
    {
      name: "JavaScript / JSX",
      description: "Proficient in modern JavaScript, including frameworks and libraries like ReactJS and Node.js."
    },
    {
      name: "Machine Learning",
      description: "Comfortable with several machine learning algorithms and libraries, including scikit-learn, TensorFlow, and PyTorch."
    },
    {
      name: "Web Development",
      description: "Skilled in front-end and back-end web development, including HTML, CSS, JavaScript, React, Node.js, and Express.js."
    },
    {
      name: "Databases",
      description: "Experienced with SQL and NoSQL databases like MySQL, PostgreSQL, and MongoDB."
    },
    {
        name: "Lua",
        description: "Experienced in creating game scripts using Lua, including work on popular platforms like Roblox."
      },
      {
        name: "Unity Engine",
        description: "Skilled in creating games with Unity using C#, with an understanding of Unity's physics engine, animations, and UI systems."
      },
      {
        name: "Unreal Engine",
        description: "Proficient in creating games and simulations with Unreal Engine, with a deep understanding of Blueprints and C++."
      },
  ];
  


function displaySoftSkills() {
    const section = document.getElementById('soft-skills');

    softSkills.forEach(skill => {
        const div = document.createElement('div');
        section.appendChild(div);

        const h3 = document.createElement('h3');
        h3.textContent = skill.title;
        div.appendChild(h3);

        const p = document.createElement('p');
        p.textContent = skill.description;
        div.appendChild(p);
    });

}
function displaySkills() {
    const section = document.getElementById('skills');
  
    skills.forEach((skill) => {
        const div = document.createElement('div');
        section.appendChild(div);

      const h3 = document.createElement("h3");
      h3.textContent = skill.name;
      div.appendChild(h3);
  
      const p = document.createElement("p");
      p.textContent = skill.description;
      div.appendChild(p);
    });
    }
  

document.addEventListener('DOMContentLoaded', (event) => {
    fetchRepositories();
    displaySoftSkills();

    displayGames();  // Function to fetch published games data
    displayFeedback();

    displaySkills();
});

window.addEventListener("DOMContentLoaded", () => {
    const offset = 120; // height of the navbar
    const navbarLinks = document.querySelectorAll('#navbar a[href^="#"]');

    navbarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            const targetElement = document.querySelector(href);
            const top = window.scrollY + targetElement.getBoundingClientRect().top - offset;
            window.scrollTo({ top: top, behavior: 'smooth' });
        });
    });
});

function fetchRepositories() {
    fetch('https://api.github.com/users/zacharie410/repos')  // Replace 'yourusername' with your GitHub username
        .then(response => response.json())
        .then(data => displayRepositories(data))
        .catch(error => console.error('Error:', error));
}

function displayRepositories(repos) {
    const projectSection = document.getElementById('projects-list');

    // Filter out repositories with 'zacharie410' in the title
    repos = repos.filter(repo => !repo.name.toLowerCase().includes('zacharie410'));


    // Sort repositories by last updated
    repos.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));


    repos.forEach(repo => {
        const repoElement = document.createElement('div');
        repoElement.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description}</p>
            <a href="${repo.html_url}" target="_blank">GitHub Link</a>
        `;
        projectSection.appendChild(repoElement);
    });
}

function displayFeedback() {
    // Replace this with your actual feedback data
    const feedback = [
        {
            "game": "Sky Marshal",
            "user": "Denji",
            "date": "May 11, 2022 | 8:11 AM",
            "message": "Hello YouTubes, Just wanted to say that I really enjoyed playing Sky Marshal back when it was popular"
        },
        {
            "game": "Game status",
            "user": "zanderva",
            "date": "Apr 5, 2020 | 12:07 PM",
            "message": "Hey Man, I started playing more Roblox again and I remember playing Sky Marshall 2 as a kid. I was looking to play it again with my friends and was wondering if you planned on making it open ever again?"
        },
        {
            "game": "Sky Marshall",
            "user": "GettingRevenue",
            "date": "Jan 26, 2020 | 11:11 AM",
            "message": "Hello YouTubes, I don't know if you are still working on Roblox games, but I wanted to ask you something. Would it be possible for you to reopen your Sky Marshall game or reupdate it. It was one my favorite games back in the day and I think it would be very popular in the Roblox community. Regardless if you decide to reupdate it or not, thank you for making such a great game that I got to enjoy when I played Roblox back in the day."
        },
        {
            "game": "Hi",
            "user": "TheRed_Baron",
            "date": "Dec 8, 2020 | 2:03 PM",
            "message": "I loved and miss your gunscripts that the ww2 community used in like 2013 ;("
        },
        {
            "game": "Concerning a game you made ~8 years ago",
            "user": "saquinavir",
            "date": "Nov 7, 2021 | 8:28 AM",
            "message": "Hey, I still fondly remember one of the games you made about 8 years ago. Not sure the exact date. But now I'm 18, in the army, and I still remember City Life fondly for some reason. Playing City Life was one of the greatest memories I had as a kid; it was really fun, as weird as it sounds, and even though I have a lot of other great memories I could share instead of this one. I went through some pretty tough times to get here, and your game you made a while back just helped me get through it. I'd like to say thank you, and that I wish you the greatest in life. I remember you posting a while back you were in college, and I'm assuming you're out now. It's just crazy how the time flies- 8 years ago I was just a kid with no worries playing your game and now I'm in the Army. I'm sure you know it more than I. Thanks. P.S. you should put city life back up lol."
        },
        {
            "game": "Thanks for making my childhood games",
            "user": "aco07",
            "date": "Oct 28, 2021 | 11:17 AM",
            "message": "Hey man. You most likely wont see this, but if you do, from the bottom of my heart thank you. You've made some of my favorite games I used to play years ago. I checked up on your profile and I'm sad to see there's no new projects but I'm sure you're doing your own thing outside of Roblox right now. Sky marshal especially was amazing, I'd play it everyday for hours. The tying people up, changing the course of the plane as a pirate, everything about it. I also played tactical assault a ton too. I hope you're doing well man, thanks for all you did on this site. I hope to see future projects on Roblox from you, but if you've moved on that's completely acceptable. Best of luck man, once more, thank you. I've even checked out sky marshal since I see you updated it and fixed it. It's very nostaglic, I'm sure you could get a group together to play it. Make sure to message me back if you do make a group for it. Thanks homie."
        },
        {
            "game": "old games",
            "user": "Killerpanda1945",
            "date": "Apr 3, 2022 | 11:08 AM",
            "message": "hey, one of my best friends just passed and we met on pandemonium and city life. was wondering if they still worked and if there was a way to play them again to relive the memories"
        },
        {
            "game": "ur games were my childhood",
            "user": "elitelightskin",
            "date": "Dec 11, 2021 | 7:52 AM",
            "message": "i loved your games bro"
        }
    ];    
    // Sort feedback by message length
    feedback.sort((a, b) => b.message.length - a.message.length);

    const feedbackSection = document.getElementById('feedback-list');

    feedback.forEach(item => {
        const feedbackElement = document.createElement('div');
        feedbackElement.innerHTML = `
            <h3>${item.user} on ${item.game}</h3>
            <p>${item.message}</p>
            <p><small>${item.date}</small></p>
        `;
        feedbackSection.appendChild(feedbackElement);
    });
}

function displayGames() {
    // Replace this with your actual games data
    const games = [
        {
            name: "Tactical Assault [2014]",
            description: "Featured in the archived Roblox blog as an admin favorite of 2014. This game also generated revenue in 2021 and 2022.",
            plays: 2300000,
            link: "https://www.roblox.com/games/181325745/Tactical-Assault",
            image: "https://tr.rbxcdn.com/e974743390e59c51975d5f388a3c2953/768/432/Image/Png"
        },
        {
            name: "Sky Marshal [2014]",
            description: "My first financially successful game",
            plays: 416300,
            link: "https://www.roblox.com/games/147502952/Sky-Marshal",
            image: "https://tr.rbxcdn.com/35cbc46680ef45e33ecc6387b6bac5b7/768/432/Image/Png"
        },
        {
            name: "WWII Build and Fight [2015]",
            description: "I still receive emails about this game in 2023, sadly the API it uses is deprecated",
            plays: 608100,
            link: "https://www.roblox.com/games/336557677/WWII-Build-and-Fight",
            image: "https://tr.rbxcdn.com/08390d2f2559fbd0da2fea6ff996d886/768/432/Image/Png"
        },
        {
            name: "Jungle Storm [2016]",
            description: "This was a strategy FPS where you had to complete objectives in harsh procedurally generated jungles",
            plays: 417000,
            link: "https://www.roblox.com/games/415769107/Jungle-Storm",
            image: "https://tr.rbxcdn.com/d5ab40d6ea50bebd7cc0ca3320bd8e00/768/432/Image/Png"
        },
    ];
    
    const gameSection = document.getElementById('games-list');
    
    // Sort games by success metric
    games.sort((a, b) => b.plays - a.plays);

    games.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.innerHTML = `
            <h3>${game.name}</h3>
            <p>${game.plays} Plays</p>
            <img src="${game.image}" alt="${game.name}">
            <p>${game.description}</p>
            <a href="${game.link}" target="_blank">Play Game</a>
        `;
        gameSection.appendChild(gameElement);
    });
}
