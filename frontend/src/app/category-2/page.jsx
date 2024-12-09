import React from 'react';
import './style.css'; // Ensure this points to the correct path for your CSS


const Card = ({ imageUrl, characterUrl, categoryUrl,title }) => (
  <a href={categoryUrl} alt="Mythrill" >
    <div className="card ml-50" href={categoryUrl}>
      <div className="wrapper">
        <img src={imageUrl} alt="cover" className="cover-image" />
      </div>
      <p className="title" >{title} </p>
      <img src={characterUrl} alt="character" className="character" />
    </div>
  </a>
);

const App = () => {
  const cards = [
    {
      imageUrl: 'https://imgs.search.brave.com/7vicu7Gl1sA0hkn01JrEf3WeKUFch9CT6qcJ3VEM-CE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/ZG9nLXBob25lLWJh/Y2tncm91bmQuanBn/P3dpZHRoPTEwMDAm/Zm9ybWF0PXBqcGcm/ZXhpZj0wJmlwdGM9/MA',
      characterUrl: 'https://imgs.search.brave.com/QJpzY5Be-2d_zElARJTyML-nMy0X81iDE7RR1bPLYPw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmYmQ5OTk2/ZTI0YmM0M2JiZGUu/cG5n',
      categoryName: 'dog',
      title: 'DOG'
    },
    {
      imageUrl: 'https://imgs.search.brave.com/uqUfh6fab1TxtAAv5C3s2qS6uck6Byn9EOL0lqSzTWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc3LzUxLzgx/LzM2MF9GXzc3NTE4/MTM2X0Y4OEkwdjNS/Mm1ac0tFZ3h4WE1j/NGlxWGxPaks4T0xF/LmpwZw',
      characterUrl: 'https://imgs.search.brave.com/3-jtEsmrcfKqfszMUhwvOYUWPNUs5fGsx_KnBbuhk7c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmYmQ5OTk2/ZTI0YmM0M2JiOGMu/cG5n',
      categoryName: 'cat',
      title: 'CAT'
    },
    {
      imageUrl: 'https://imgs.search.brave.com/TOsROsCq9ZVVvdnlB8wv50Kp8C1oOS-Z-YEHpp3zyyM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzI2Lzg4LzUw/LzM2MF9GXzgyNjg4/NTA4Nl9kQzBQdVRp/U0N2a0pscEhCMFRk/MjhWNUFuM1ZFRmRO/aC5qcGc',
      characterUrl: 'https://imgs.search.brave.com/nxno56jzdc36MK_VkG-7KtI6A8wor7pxWueE3Rexe7I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNi9QZWFj/b2NrLVBORy1QaWMt/QmFja2dyb3VuZC5w/bmc',
      categoryName: 'birds',
      title: 'BIRDS'

    },
    {
      imageUrl: 'https://imgs.search.brave.com/rFnLaYol9vq11f4nwCuEvV8BbXB3Il9xS4n3sDzBBx8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzQ3LzMzLzA4/LzM2MF9GXzI0NzMz/MDg1OF9SdlNKV0Fo/TWJmcnFzTTVWVW1q/TEQ0Z3p6U0tVYUps/cy5qcGc',
      characterUrl: 'https://imgs.search.brave.com/ovo28A7brsGafJRYdYodZVwg0tJY6k_tJ_aGEpLVFD4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmYmQ5OTk2/ZTI0YmM0M2JjOWYu/cG5n',
      categoryName: 'rabbit',
      title: 'RABBIT'

    },
    {
      imageUrl: 'https://imgs.search.brave.com/3UTiEQBB-B6vZagpHxM-uKDZ9KPfiuROqIGQ1nSX-uI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzEyLzQxLzM4/LzM2MF9GXzExMjQx/Mzg2Ml8xWHdGMGhI/dkw5TnptVUxtMlA4/MDVwd1dNbGtBQllV/My5qcGc',
      characterUrl: 'https://imgs.search.brave.com/zHzU56DfyLm_tucRwz6lHz5C9eoubXIDWeOKW0n-qSM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/NjY3LzI0My9zbWFs/bC9zZWEtdHVydGxl/LXN3aW1taW5nLXdp/dGgtdHJhbnNwYXJl/bnQtYmFja2dyb3Vu/ZC1wbmcucG5n',
      categoryName: 'turtle',
      title: 'TURTLE'

    },
    {
      imageUrl: 'https://imgs.search.brave.com/294wVm2PqQsD2_DiEjdtberzbYaoTOUjqTl2H7bcjt0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTgx/NDE5Nzk4L3Bob3Rv/L2Zpc2gtaW4tYXF1/YXJpdW0uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVR3N25I/UlpsWnkzWVhsN1FB/d1BheDVNRWpYVEZo/cnA2SmJRWVloSjVf/c2c9',
      characterUrl: 'https://imgs.search.brave.com/hpx6a-7gdibumEsL-xOhYm4x63kLpuCvXoXC27Mmcvo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmYmQ5OTk2/ZTI0YmM0M2JiZjUu/cG5n',
      categoryName: 'Fish',
      title: 'FISH'

    },
  ];

  return (
    <div className='min-h-screen '>
    <div className="app h-full relative">
      {cards.map((card, index) => (
        <Card key={index} imageUrl={card.imageUrl} characterUrl={card.characterUrl} categoryUrl={'/listpet/' + card.categoryName} />
      ))}
    </div></div>
  );
};

export default App;
