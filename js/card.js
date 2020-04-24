const content = [
{
  title: 'Lorem Ipsum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  keywords: [
  'cat',
  'tabby',
  'meow'],

  preview: 'https://images.pexels.com/photos/1034828/pexels-photo-1034828.jpeg' },

{
  title: 'Lorem Ipsum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  keywords: [
  'hair',
  'wavy',
  'blonde',
  'leaves'],

  preview: 'https://images.pexels.com/photos/1049687/pexels-photo-1049687.jpeg' },

{
  title: 'Lorem Ipsum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  keywords: [
  'coffee',
  'mug',
  'nail polish',
  'hands',
  'wood'],

  preview: 'https://images.pexels.com/photos/701786/pexels-photo-701786.jpeg' },

{
  title: 'Lorem Ipsum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  keywords: [
  'palm tree',
  'sunset',
  'sky'],

  preview: 'https://images.pexels.com/photos/6741/light-nature-sky-love.jpg' }];


function render() {
  let root = document.getElementById('root');

  for (i = 0; i < content.length; i++) {

    let keywords = '';
    for (x = 0; x < content[i].keywords.length; x++) {
      keywords += `
        <a href="#" class="keyword">
          #${content[i].keywords[x]}
        </a>
        `;
    }

    root.innerHTML += `
      <div class="item">
		<div class="image"
          style="background-image: url(${content[i].preview}?auto=compress&cs=tinysrgb&dpr=2&h=190&w=260)">
        </div>

        <span class="title">
          ${content[i].title}
        </span>

        <span class="description">
          ${content[i].description}
        </span><br>

        <span class="keywords">
          ${keywords}
        </span>
      </div>
    `;
  }
}

render();