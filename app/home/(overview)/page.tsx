import Link from 'next/link';

export default function Page() {
  return (
  <>

    <div>
      <header>
        <h1>Header</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
        </nav>
      </header>

      <main>
        <article>
          <header>
            <h1>Header</h1>
          </header>

          <section>
            <header>
              <h2>Header</h2>
            </header>
            <div>
              <p>a<span>b</span>c</p>
            </div>
          </section>

          <section>
            <header>
              <h2>Header</h2>
            </header>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </section>

          <section>
            <header>
              <h2>Header</h2>
            </header>
            <table>
              <thead>
                <tr></tr>
                <td></td>
              </thead>
              <tbody>
                <tr></tr>
                <td></td>
              </tbody>
            </table>
          </section>
        </article>
      </main>

      <footer>
        <section>
          <h2></h2>
          <address>
            <p></p>
            <Link href="/"></Link>
          </address>
        </section>
      </footer>
    </div>

  </>
  );
}
