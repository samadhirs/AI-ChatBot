export const getRandomResponse = () => {
    const botResponses = [
        "I understand your question. Let me think about that....",
        "That's an interesting point! Here's what I know....",
        "I'm here to help! What do you need assistance with?",
        "Sure! Could you please provide more details?",
        "That's interesting! Tell me more.",
        "I'm not sure I understand. Could you clarify?",
        "Absolutely! Let's get started.",
        "Thank you for sharing that with me.",
        "I appreciate your patience. Let me look into that for you.",
        "Can you please elaborate on that point?",
        "I'm glad to assist you with that!",
        "Let's work through this together."
    ];

    return botResponses[Math.floor(Math.random() * botResponses.length)];

}

    export const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
