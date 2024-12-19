import { Follower } from "./modules/follower.js";

const content = document.querySelector('.content');
const button  = document.querySelector('.mark-btn');
const unreadCount = document.querySelector('.num-unread');


async function loadFollowers() {

    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        // console.log(data.followers);

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
            // console.log(content);
        })

        const articles = document.querySelectorAll('article');
            const notifications = document.querySelectorAll('.notification');

            button.addEventListener('click', () => {
                articles.forEach(article => {
                    if (article.classList.contains('unread')) {
                        article.classList.remove('unread');
                    }
                })

                notifications.forEach(notification => {
                    notification.classList.remove('notification');
                })

                unreadCount.textContent = 0;
                
            })

    } catch (error) {
        console.error('Error loading followers:', error);
        return [];
    }
}


document.addEventListener("DOMContentLoaded", loadFollowers);