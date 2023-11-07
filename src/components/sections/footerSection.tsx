export default function Footer() {
  return (
    <footer
      className="w-screen flex flex-col justify-center items-center p-40 gap-8 m-0"
      style={{
        color: 'rgb(var(--color-background))',
        backgroundColor: 'rgb(var(--color-text))',
      }}
    >
      <div className="flex flex-row w-full gap-4">
        <div className="flex-1">
          <div className="border-t border-gray-200 w-full mb-4"></div>
          <div className="flex flex-row gap-[40%]">
            <ul>
              <li>Sorem</li>
              <li>Sorem</li>
              <li>Sorem</li>
              <li>Sorem</li>
              <li>Sorem</li>
            </ul>
            <ul>
              <li>Sorem</li>
              <li>Sorem</li>
              <li>Sorem</li>
              <li>Sorem</li>
              <li>Sorem</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="border-t border-gray-200 w-full mb-4"></div>
          <button className="btn btn-white">CONTACT US</button>
        </div>
      </div>
      <p>vietclimb all right reserved, copyright &copy; 2023</p>
    </footer>
  );
}
