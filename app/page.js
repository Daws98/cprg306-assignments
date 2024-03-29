import Link from 'next/link'

export default function Page() {
  return (
    <main>
      <h1 style={{ fontSize: '3rem', textAlign: 'center', fontFamily: 'Indie Flower', color: 'lightgray' }}>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
          <div className="week-link" style={{ textAlign: 'center', border: '1px solid black', padding: '10px', backgroundColor: 'lightgray', color: 'black', fontFamily: 'Indie Flower' }}>
            <Link href='week-2' style={{ fontSize: '1.2rem' }}>Week 2</Link>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div className="week-link" style={{ textAlign: 'center', border: '1px solid black', padding: '10px', backgroundColor: 'lightgray', color: 'black', fontFamily: 'Indie Flower' }}>
            <Link href='week-3' style={{ fontSize: '1.2rem' }}>Week 3</Link>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div className="week-link" style={{ textAlign: 'center', border: '1px solid black', padding: '10px', backgroundColor: 'lightgray', color: 'black', fontFamily: 'Indie Flower' }}>
            <Link href='week-4' style={{ fontSize: '1.2rem' }}>Week 4</Link>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div className="week-link" style={{ textAlign: 'center', border: '1px solid black', padding: '10px', backgroundColor: 'lightgray', color: 'black', fontFamily: 'Indie Flower' }}>
            <Link href='week-5' style={{ fontSize: '1.2rem' }}>Week 5</Link>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div className="week-link" style={{ textAlign: 'center', border: '1px solid black', padding: '10px', backgroundColor: 'lightgray', color: 'black', fontFamily: 'Indie Flower' }}>
            <Link href='week-6' style={{ fontSize: '1.2rem' }}>Week 6</Link>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div className="week-link" style={{ textAlign: 'center', border: '1px solid black', padding: '10px', backgroundColor: 'lightgray', color: 'black', fontFamily: 'Indie Flower' }}>
            <Link href='week-7' style={{ fontSize: '1.2rem' }}>Week 7</Link>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div className="week-link" style={{ textAlign: 'center', border: '1px solid black', padding: '10px', backgroundColor: 'lightgray', color: 'black', fontFamily: 'Indie Flower' }}>
            <Link href='week-8' style={{ fontSize: '1.2rem' }}>Week 8</Link>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div className="week-link" style={{ textAlign: 'center', border: '1px solid black', padding: '10px', backgroundColor: 'lightgray', color: 'black', fontFamily: 'Indie Flower' }}>
            <Link href='week-10' style={{ fontSize: '1.2rem' }}>Week 10</Link>
          </div>
        </li>
      </ul>
    </main>
  )
}
