const ids = ['KPSRaBNdei4', '87pyt0GufiM', '_7P59MMKrLw', 'znWFLeHTe5o', 'snhcnGIfA94'];
async function run() {
  for (const id of ids) {
    try {
      const res = await fetch('https://unsplash.com/photos/' + id);
      const text = await res.text();
      const match = text.match(/<meta property="og:image" content="([^"]+)"/);
      if (match) {
        let url = match[1];
        if (url.includes('?')) {
          url = url.split('?')[0];
        }
        console.log(id + ' -> ' + url + '?auto=format&fit=crop&w=800&q=80');
      } else {
        console.log(id + ' -> Not found');
      }
    } catch(e) {
      console.log(id + ' -> Error');
    }
  }
}
run();
