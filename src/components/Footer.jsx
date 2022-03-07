function Footer() {
  return  <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Hi! I'm Dobry Den</h5>
                <p className="grey-text text-lighten-4">I'm sorry it's not very pretty. In this project, I was learning how to use react and didn't work much on styles</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/DenisDudin">GitHub</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://vk.com/d0bry_den">VK</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">© {new Date().getFullYear()} DobryDen</div>
          </div>
        </footer>
}


export { Footer };
