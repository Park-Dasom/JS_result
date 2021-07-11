const lyrics = [
    {
        lyric: "I understand about indecision. But I don't care if I get behind People livin' in competition All I want is to have my peace of mind.",
        singer: "Boston",
    },
    {
        lyric: "Who wants to live forever. There's no chance for us. It's all decided for us. This world has only one sweet moment set aside for us.",
        singer: "Queen",
    },
    {
        lyric: "I'm the one who wants to be with you. Deep inside I hope you feel it too. Waited on a line of greens and blues. Just to be the next to be with you.",
        singer: "MR.BIG",
    },
    {
        lyric: "We stand up, we won't fall. We're one and one for all. The writing's on the wall. We are the youth gone wild.",
        singer: "Skidrow",
    },
    {
        lyric: "If I die tomorrow. I'd be all right. Because I believe. That after we're gone. The spirit carries on.",
        singer: "Dream Theather",
    },
    {
        lyric: "Just take your chance forever, and make your dreams come true. You know it's now or never, it's up to you.",
        singer: "Firehouse",
    },
    {
        lyric: "The future's in the air. Can feel it everywhere. Blowing with the wind of change.",
        singer: "Scorpions",
    },
    {
        lyric: "ental wounds not healing. Who and what's to blame. I'm going off the rails on a crazy train.",
        singer: "Ozzy Osbourne",
    },
    {
        lyric: "You're here, there's nothing I fear. And I know that my heart will go on.",
        singer: "Céline Dion",
    },
    {
        lyric: "It ain't over till it's over.",
        singer: "Yogi Berra and Kim kyoung ho",
    }
]

const lyric = document.querySelector("#quote span:first-child");
const singer = document.querySelector("#quote span:last-child");

const randomNumber = Math.floor(Math.random() * lyrics.length);
const toDaysLyrics = lyrics[randomNumber]; 

lyric.innerText = toDaysLyrics.lyric;
singer.innerText = `-${toDaysLyrics.singer}`;