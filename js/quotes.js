const quotes = [
    {
        quote : "일단 이즈한테 궁썻어",
        author : "클템",
    },
    {
        quote : "그러니까 내가 누군가를 좋아한다는게.. 그사람에게 상처가 될 수 있는 거잖아요..",
        author : "랄로",
    },
    {
        quote : "미쳤다 도라따",
        author : "클템",
    },
    {
        quote : "슈퍼 쿨",
        author : "노마드 코더",
    },
    {
        quote : "에욱",
        author : "클템",
    },
    {
        quote : "나도 알아 나의 문제가 무엇인지",
        author : "10cm",
    },
    {
        quote : "노는게 제일 좋아",
        author : "뽀로로",
    },
    {
        quote : "c그널보내 c그널 보내 d릿 d릿 d릿 d릿",
        author : "교수님",
    },
    {
        quote : "어? 에프다",
        author : "최준",
    },
    {
        quote : "애송이야",
        author : "클템",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;