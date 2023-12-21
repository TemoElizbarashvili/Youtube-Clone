let categories = ['ყველა', 'ვიდეო თამაშები', 'პირდაპირი', 'მიქსები', 'მაგარი ვიდეოები', 'საშიში', 'კომედია', 'ტრენდინგი', 'მუსიკალური', 'ყველა', 'ვიდეო თამაშები', 'პირდაპირი', 'მიქსები', 'მაგარი ვიდეოები', 'საშიში', 'კომედია', 'ტრენდინგი', 'მუსიკალური', 'ფრენბურთი', 'ბავშვებისთვის', 'პოლიტიკა',
'სიმულაციური ვიდეოები', 'კომედიური სკეტჩი' , 'მძაფრსიუჟეტიანი ვიდეო თამაშები',
 'სპორტული', 'კომედიური სკეტჩი' , 'მძაფრსიუჟეტიანი ვიდეო თამაშები', 'სპორტული', 'სპორტული',
  'ფეხბურთი', 'ახლახან ატვირთული','სპორტული', 'ფეხბურთი', 'ახლახან ატვირთული', 'ნანახი', 'თქვენთვის ახალი'];
const videoArray = [
    {
        imageUrl: 'https://i.ytimg.com/vi/u3WajuShD1w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBvakB0yzlV2j4UWLn1WlkxIWHmlA',
        channelImageUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKb-3Tg8dXNbWlqm1lPlda1Xs_SURtanioT0NoLbQw=s900-c-k-c0x00ffffff-no-rj',
        title: 'ტირთან შეხვედრა God of War Ragnarök PS5 ნაწილი 10',
        channelName: 'Go Lets Play',
        views: '8.8 მ.',
        uploadedDaysAgo: 3,
    },
    {
      imageUrl: 'https://marketplace.canva.com/EAFEUwUPzkY/1/0/1600w/canva-black-modern-vlogger-youtube-banner-voJxGX5HW3Q.jpg',
      channelImageUrl: 'https://bcassetcdn.com/public/blog/wp-content/uploads/2021/12/08165411/MrBeast-1024x1024.png',
      title: 'Amazing Hiking Adventure',
      channelName: 'Outdoor Explorers',
      views: 5000,
      uploadedDaysAgo: 30,
    },
    {
      imageUrl: 'https://embed-ssl.wistia.com/deliveries/5279ea91ba79082360e8941013052566.webp?image_crop_resized=1280x720',
      channelImageUrl: 'https://i.pinimg.com/736x/2f/ea/0e/2fea0e711c17a07ab2ec63593e3841bc.jpg',
      title: 'How to Make a YouTube Video',
      channelName: 'Gourmet Kitchen',
      views: '10K',
      uploadedDaysAgo: 15,
    },
    {
      imageUrl: 'https://i.ytimg.com/vi/QtmDlPe4eyY/maxresdefault.jpg',
      channelImageUrl: 'https://i.pinimg.com/736x/93/a7/f7/93a7f7b2e241f4c577b4b5be648e6281.jpg',
      title: 'How to Start a YouTube Gaming Channel ',
      channelName: 'Tech Enthusiast',
      views: '1.1M',
      uploadedDaysAgo: 20,
    },
    {
      imageUrl: 'https://i.ytimg.com/vi/BW8EWG2A_lM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDB9WVYRka2LbJuZMnJMx9cksJ9Tw',
      channelImageUrl: 'https://www.tailorbrands.com/wp-content/uploads/2021/04/marshmello.png',
      title: 'Travel Vlog: Exploring Thailand',
      channelName: 'Wanderlust Adventures',
      views: 8500,
      uploadedDaysAgo: 25,
    },
    {
        imageUrl: 'https://i.ytimg.com/vi/yq4H7g2Vn3Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA-g903socUWZzHYAkSPZyblbRDDg',
        channelImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjeYnDWGG4M3iya6fvS3Pk8vYcI0Kr1UvteRgdH_oLdSSaeShfwHusgt7015PsRWtJ86k&usqp=CAU',
        title: 'TJavaScript Tutorial',
        channelName: 'Wanderlust Adventures',
        views: 23,
        uploadedDaysAgo: 2,
      },
      {
        imageUrl: 'https://i.ytimg.com/vi/Qqx_wzMmFeA/maxresdefault.jpg',
        channelImageUrl: 'https://play-lh.googleusercontent.com/ZA-V5N1YBDRX6vlhImUTgv-EsQC2gHSUv630u6jJTrStf3wQHB8zICjvLxxbovpbHyQ=w240-h480-rw',
        title: 'GTA Game play',
        channelName: 'Rockstar',
        views: '23.5 მ.',
        uploadedDaysAgo: 30,
      },
      {
        imageUrl: 'https://i.ytimg.com/vi/N-xHcvug3WI/maxresdefault.jpg',
        channelImageUrl: 'https://bcassetcdn.com/public/blog/wp-content/uploads/2021/12/08165149/Kids-Diana-Show-1024x1024.jpg',
        title: 'JavaScript Tutorial for Beginners',
        channelName: 'Entertainment ',
        views: '23.5 ათ.',
        uploadedDaysAgo: 15,
      },
      {
        imageUrl: 'https://androgaming.com/wp-content/uploads/2023/02/UltimateSackboy_F-800x445.jpg',
        channelImageUrl: 'https://play-lh.googleusercontent.com/AibwffxOzlyGj2poR5oFHJZfPP0_RgdGQ1ICJVpE4rAbU1VtjLX3St9pdburxFHTIOQ',
        title: 'Ultimate Sackboy Review',
        channelName: 'Gamer720P',
        views: '12.5 ათ.',
        uploadedDaysAgo: 15,
      },
      {
        imageUrl: 'https://butwhytho.net/wp-content/uploads/2022/12/The-Lords-of-The-Fallen-But-Why-Tho.jpg',
        channelImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwxc-_SRlIA6Rqs9Lti1lXeqP5i3iG0aNbAv59vn6UgwlQ-UdEsI_PZhlcrpEzxVUAvA&usqp=CAU',
        title: 'Lords of the Fallen Gameplay Video',
        channelName: 'Gamer720P',
        views: '500',
        uploadedDaysAgo: 1,
      },
      {
        imageUrl: 'https://i.ytimg.com/vi/f0qS1d86gB4/maxresdefault.jpg',
        channelImageUrl: 'https://res.cloudinary.com/teepublic/image/private/s--PE2Y32M0--/c_crop,x_10,y_10/c_fit,w_830/c_crop,g_north_west,h_1038,w_1038,x_-104,y_-150/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-215,y_-261/b_rgb:000000/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1607719037/production/designs/17232183_1.jpg',
        title: 'The Witch Hut / House - Alan Wake 2 , I dont wanna be here',
        channelName: 'Zuraba1080HD',
        views: '1',
        uploadedDaysAgo: 23,
      },
      {
        imageUrl: 'https://i.ytimg.com/vi/maETzmS9Cz0/maxresdefault.jpg',
        channelImageUrl: 'https://res.cloudinary.com/teepublic/image/private/s--PE2Y32M0--/c_crop,x_10,y_10/c_fit,w_830/c_crop,g_north_west,h_1038,w_1038,x_-104,y_-150/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-215,y_-261/b_rgb:000000/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1607719037/production/designs/17232183_1.jpg',
        title: 'Need For Speed Heat Surprised Me',
        channelName: 'Surprised Guy',
        views: '69.8 ათ.',
        uploadedDaysAgo: 23,
      },
      {
        imageUrl: 'https://i.ytimg.com/vi/u3WajuShD1w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBvakB0yzlV2j4UWLn1WlkxIWHmlA',
        channelImageUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKb-3Tg8dXNbWlqm1lPlda1Xs_SURtanioT0NoLbQw=s900-c-k-c0x00ffffff-no-rj',
        title: 'ტირთან შეხვედრა God of War Ragnarök PS5 ნაწილი 10',
        channelName: 'Go Lets Play',
        views: '8.8 მ.',
        uploadedDaysAgo: 3,
    },
    {
      imageUrl: 'https://androgaming.com/wp-content/uploads/2023/02/UltimateSackboy_F-800x445.jpg',
      channelImageUrl: 'https://play-lh.googleusercontent.com/AibwffxOzlyGj2poR5oFHJZfPP0_RgdGQ1ICJVpE4rAbU1VtjLX3St9pdburxFHTIOQ',
      title: 'Ultimate Sackboy Review',
      channelName: 'Gamer720P',
      views: '12.5 ათ.',
      uploadedDaysAgo: 15,
    },
    {
      imageUrl: 'https://i.ytimg.com/vi/N-xHcvug3WI/maxresdefault.jpg',
      channelImageUrl: 'https://bcassetcdn.com/public/blog/wp-content/uploads/2021/12/08165149/Kids-Diana-Show-1024x1024.jpg',
      title: 'JavaScript Tutorial for Beginners',
      channelName: 'Entertainment ',
      views: '23.5 ათ.',
      uploadedDaysAgo: 15,
    },
  ];


let categoriesContainer = document.getElementById('categories');

const categoriesHalf = categories.length/2;
for (let i = 0; i < categoriesHalf; i++) {
    if (i === categoriesHalf-1) {
        const div = document.createElement('div');
        div.classList.add('category-content__categories__item');
        div.id = 'rightArrow';
        const icon = document.createElement('i');
        icon.classList.add('fas');
        icon.classList.add('fa-chevron-right');
        div.appendChild(icon);        
        categoriesContainer.appendChild(div);
    } else {
        const div = document.createElement('div');
        div.classList.add('category-content__categories__item');
        div.textContent = categories[i];
        categoriesContainer.appendChild(div);
    }
}
let leftArrow;

let rightArrow = document.getElementById('rightArrow');
let contents = document.querySelectorAll('.category-content__categories__item');
rightArrow.addEventListener('click', function() {
    contents.forEach((value, index) => {
        if (index === 0){
            const icon = document.createElement('i');
            icon.classList.add('fas');
            icon.classList.add('fa-chevron-left');
            value.textContent = '';
            value.appendChild(icon);
            value.id = 'leftArrow';
            leftArrow = value;
            leftArrow.addEventListener('click', function() {
                contents.forEach((value, index) => {
                    if (index === categoriesHalf-1){
                        const icon = document.createElement('i');
                        icon.classList.add('fas');
                        icon.classList.add('fa-chevron-right');
                        value.textContent = '';
                        value.appendChild(icon);
                        value.id = 'rightArrow';
                    } else {
                        value.textContent = categories[index];
                        value.classList.contains('animate') ? value.classList.remove('animate') : value.classList.add('animate')
                    }
                })
            })

        } else {
            if (index === 10) {
                value.id = 'dummyId';
            }
            value.textContent = categories[index+3];
            value.classList.contains('animate') ? value.classList.remove('animate') : value.classList.add('animate')
        }
    });
});

let videosContainer = document.getElementById('videosContainer');
videoArray.forEach(value => {
    const videoCard = document.createElement('div');
    videoCard.classList.add('videos__card')

    const videoCardImage = document.createElement('div');
    videoCardImage.classList.add('videos__card__image');
    videoCardImage.style.backgroundImage= `url("${value.imageUrl}")`;
    videoCard.appendChild(videoCardImage);
    const videoCardInfo = document.createElement('div');
    videoCardInfo.classList.add('videos__card__info');
    videoCard.appendChild(videoCardInfo);
    const videoCardInfoImage = document.createElement('div');
    videoCardInfoImage.classList.add('videos__card__info__image');
    videoCardInfoImage.style.backgroundImage = `url("${value.channelImageUrl}")`;
    videoCardInfo.appendChild(videoCardInfoImage);
    const videoCardInfoText = document.createElement('div');
    videoCardInfoText.classList.add('videos__card__info__text');
    const videoCardInfoTextTitle = document.createElement('div');
    videoCardInfoTextTitle.classList.add('videos__card__info__text__title');
    videoCardInfoTextTitle.textContent = value.title;
    videoCardInfoText.appendChild(videoCardInfoTextTitle);
    const videosCardInfoTextChannel = document.createElement('div');
    videosCardInfoTextChannel.classList.add('videos__card__info__text__channel');
    videosCardInfoTextChannel.textContent = value.channelName;
    videoCardInfoText.appendChild(videosCardInfoTextChannel);
    const videoCardInfoTextViews = document.createElement('div');
    videoCardInfoTextViews.classList.add('videos__card__info__text__views');
    videoCardInfoTextViews.textContent = `${value.views} ნახვა • ${value.uploadedDaysAgo} დღის წინ`;
    videoCardInfoText.appendChild(videoCardInfoTextViews);
    videoCardInfo.appendChild(videoCardInfoText);
    videosContainer.appendChild(videoCard);
})