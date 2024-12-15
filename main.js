import { Follower } from "./modules/follower.js";

const content = document.querySelector('.content');


async function loadFollowers() {


    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        // console.log(data.followers);

        document.body.appendChild(content);
        data.followers.forEach(elem => {
            const follower = new Follower(
                elem.name,
                elem.avatar,
                elem.time,
                elem.status,
                elem.reaction,
                elem.subject,
                elem.chat,
                elem.pictureUrl
            );

            const card = follower.createCard();
            content.appendChild(card);
            console.log(content);
        })

    } catch (error) {
        console.error('Error loading followers:', error);
        return [];
    }
}


document.addEventListener("DOMContentLoaded", loadFollowers);