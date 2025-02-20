export class Follower {

    /**
     * Creates a new Follower instance
     * @param {string} name - The name of the follower
     * @param {string} avatar - URL path of the follower's avatar image
     * @param {string} time - Time of the interaction
     * @param {string} status - Status of the notification ('read' or 'unread')
     * @param {string} reaction - The follower's reaction or action
     * @param {string} subject - The subject of the interaction (optional)
     * @param {string} chat - The chat message content (optional)
     * @param {string} pictureUrl - URL of any attached picture (optional)
     */
    constructor(name, avatar, time, status, reaction, subject, chat, pictureUrl) {
        this.name = name;
        this.avatar = avatar;
        this.time = time;
        this.status = status;
        this.reaction = reaction;
        this.subject = subject;
        this.chat = chat;
        this.pictureUrl = pictureUrl;
    }



    /**
     * Creates and returns an avatar section element
     * @returns {HTMLElement} Section element containing the follower's avatar image
     */
    createAvatarElement() {
        const avatar = document.createElement('section');
        avatar.classList.add('avatar');
        const image = document.createElement('img');
        image.src = this.avatar;
        image.alt = this.name;
        avatar.appendChild(image);

        return avatar;
    }



    /**
     * Creates and returns a message element with the follower's interaction
     * @returns {HTMLElement} Paragraph element containing the formatted message
     * following a condition of whether the instance has the subject property key
     */
    createFollowerMessage() {
        const message = document.createElement('p');
        
        message.innerHTML = this.subject  ? `<strong class='follower-name'>${this.name}</strong> ${this.reaction} <span class='subject'>${this.subject}</span> ` : `<strong class='follower-name'>${this.name}</strong> ${this.reaction} `;

        return message;
    }


    
    /**
     * Creates a wrapper div containing the message and time information
     * @returns {HTMLElement} Div element containing the message, timestamp, and 
     * a notification status if the object has a property key 'status', with a value
     *  of 'unread' to add the notification {HTMLElement}
     */
    createWrapper() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('class', 'wrapper');
        const message = this.createFollowerMessage();
        wrapper.appendChild(message);

        if (this.status === 'unread') {
            const notification = document.createElement('span');
            notification.classList.add('notification');
            message.appendChild(notification);
        }

        const postTime = document.createElement('p');
        postTime.setAttribute('class', 'post-time');
        postTime.textContent = this.time;
        wrapper.appendChild(postTime);

        return wrapper;
        
    }



    /**
     * Creates a details section containing the message wrapper and additional content
     * @returns {HTMLElement} Section element containing all message details and optional content
     * such as the chatMessage element and the picture element
     */
    createDetailsElement() {
        const details = document.createElement('section');
        details.setAttribute('class','details');

        const about = this.createWrapper();
        details.appendChild(about);

        if (this.chat) {
            details.classList.add('message');
            const chatMessage = document.createElement('p');
            chatMessage.setAttribute('class', 'chat-message');
            chatMessage.textContent = this.chat;
            details.appendChild(chatMessage);
        } 
        
        if (this.pictureUrl) {
            details.classList.add('picture');
            const picture = document.createElement('img');
            picture.src = this.pictureUrl;
            picture.alt = 'my picture';
            details.appendChild(picture);
        }

        return details;
    }



    /**
     * Creates a complete notification card combining all elements
     * @returns {HTMLElement} Article element representing the complete notification card
     */
    createCard() {
        const card = document.createElement('article');
        card.classList.add('card');

        if (this.status === 'unread') {
            card.classList.add('unread');
        }

        const avatar = this.createAvatarElement();
        const details = this.createDetailsElement();

        card.appendChild(avatar);
        card.appendChild(details);

        return card;
    }

}