import Nullstack from 'nullstack';

class Footer extends Nullstack {
  
  render() {
    const year = new Date().getFullYear();
    return (
      <footer class="xx bcm2t p10y">
        <img src="/nullstack.svg" alt="Nullstack" width="135" height="30" />
        <p class="x12 m3t"> © {year} Nullstack </p>
      </footer>
    )
  }

}

export default Footer;