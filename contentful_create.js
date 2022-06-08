
// keyworks
// indoor cycling, technology, large screen, peloton, Peloton, ride peloton, john foley, indoor cycle, virtual fitness, virtual bike

let index = 0;
var divs = document.getElementsByClassName('entity-editor__field-group');
for (div of divs) {
  let input = div.getElementsByTagName('input')[0] || div.getElementsByTagName('textarea')[0]
  if (!input) {
    input = div.getElementsByTagName('button')[0];
  }
  
  switch (index) {
    case 0:
      input.value = 'pgTest';
      break;
    case 1:
      input.value = 'title test';
      break;
    case 2:
      input.value = 'description test';
      break;
    case 3:
      input.value = 'keywords test';
      break;
    case 5:
      input.click();
      const buttons = document.getElementsByTagName('button');
      for (const button of buttons) {
        if (button.getAttribute('data-test-id') === 'linkEditor.linkExisting') {
          button.click();
          let inputs = document.getElementsByTagName('input');
          for (const input2 of inputs) {
              if (input2.getAttribute('placeholder') === 'Type to search for assets') {
                input2.value = 'Default Metadata Image';
                var event = new Event('change');
                input2.dispatchEvent(event);
              }
          }
          // Default Metadata Image
          break;
        }
      }
      break;
    default:
      console.log(index);
      break;
  }

  console.log(input);
  index++;
}