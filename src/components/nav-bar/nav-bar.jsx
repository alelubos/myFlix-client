import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nav-bar.scss';

export const NavBar = ({ user }) => {
  const getToken = () => {
    let userToken = localStorage.getItem('token');
    return userToken ? userToken : false;
  };

  const logOut = () => {
    localStorage.clear();
    window.open('/', '_self');
  };

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="stripes"
      variant="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            <svg
              className="logo"
              viewBox="0 0 210 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <svg
                className="logo"
                viewBox="0 0 250 62"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M67.273-5.564c-.318-.128-.705-.47-.86-.76-.193-.36-.282-7.23-.282-21.722v-21.196l.65-.65.65-.65H79.12l.65.65c.48.482.649.934.649 1.75v1.102l1.025-.926c2.34-2.115 5.05-3.104 8.5-3.104 3.88 0 7.02 1.239 9.361 3.693 3.1 3.25 3.983 6.591 3.812 14.418-.1 4.644-.166 5.204-.831 7.128-2.023 5.852-6.294 8.898-12.464 8.889-3.383-.005-5.543-.736-7.34-2.484-.538-.524-1.044-.953-1.124-.953-.08 0-.147 3.126-.15 6.946-.002 3.82-.091 7.076-.198 7.236-.524.785-1.465.9-7.255.883-3.247-.01-6.164-.122-6.482-.25zm6.761-2.541c.346-.759.033-1.426-.668-1.426-.622 0-1.678.825-1.678 1.31 0 .646.237.807 1.192.807.648 0 .911-.158 1.154-.691zm4.202-.257c-.252-.252-.758.156-.57.46.112.18.26.176.45-.014.156-.156.21-.357.12-.446zm-7.871-1.405c0-.619-.657-.91-1.033-.456-.196.235-.186.426.033.646.473.472 1 .372 1-.19zm3.44-2.802c0-.836-1.15-1.217-1.78-.589-.64.641-.23 1.246.845 1.246.818 0 .934-.082.934-.657zm-4.03-.616c.058-.176-.139-.315-.447-.315-.55 0-.714.278-.369.623.245.245.687.078.816-.308zm8.342-2.762c.542-.402 1.012-2.723.711-3.513-.119-.314-.573-.72-1.009-.9-.92-.38-1.39-.196-2.52.993-.618.65-.722.937-.577 1.597.287 1.304 1.113 2.154 2.094 2.154.47 0 1.056-.15 1.301-.331zm16.71-3.465c.362-.264.44-.539.306-1.073-.16-.641-.286-.71-1.161-.637-1.142.095-1.436.747-.703 1.557.544.601.898.636 1.558.153zm-3.635-1.998c.332-.495.604-1.152.604-1.461 0-.598-2.152-3.102-3.047-3.546-.57-.282-2.015.161-2.364.725-.1.163-.035 1.206.144 2.318.419 2.596.835 3.05 2.692 2.942 1.22-.07 1.431-.176 1.97-.978zm-8.916-.427c.951-.492 1.318-1.14 1.318-2.332 0-1.344-.691-2.014-2.52-2.442-1.903-.446-2.25-.362-2.876.7l-.483.817.782.836c.43.46 1.112 1.283 1.516 1.829.81 1.097 1.127 1.18 2.263.592zm14.759-.976c.581-.581.34-1.46-.635-2.316-.87-.764-1.001-.803-1.521-.46-.652.43-.865 1.5-.454 2.27.245.455.552.575 2.014.784.153.022.421-.103.596-.278zM73.26-23.14c.238-.287.242-.518.015-.942-.358-.668-1.514-.643-1.943.043-.597.953 1.191 1.787 1.928.899zm1.602-4.383c1.052-1.052.54-3.22-.87-3.685-1.116-.368-1.547-.214-2.121.758-.61 1.033-.567 1.485.244 2.548.812 1.065 1.91 1.217 2.747.38zm17.147-.07c.045-.233-.163-.554-.463-.715-.479-.256-.545-.216-.545.335 0 1.026.823 1.337 1.008.38zm-5.393-1.342c1.612-1.611 1.612-8.528 0-10.14-.486-.487-.906-.618-1.97-.618-1.638 0-2.24.292-2.789 1.353-.504.976-.794 4.827-.525 6.98.277 2.216 1.142 3.044 3.179 3.044 1.206 0 1.604-.117 2.105-.619zm12.984-.307c0-.967-.752-1.217-1.191-.396-.228.426-.223.656.024.953.527.636 1.167.33 1.167-.557zm-30.427-1.345c0-.325-.214-.538-.595-.592-.446-.063-.596.047-.596.441 0 .522.42.85.926.724.146-.036.265-.294.265-.573zm8.446-2.403c1.096-.523 1.22-.772.979-1.964-.147-.724-.323-.92-.888-.985-.58-.068-.83.114-1.406 1.028-.582.922-.653 1.217-.416 1.736.339.743.52.763 1.731.185zm-6.786-.949c.152-.187.194-.783.096-1.372-.15-.912-.286-1.072-1.084-1.279-.746-.193-.975-.15-1.255.233-.51.698-.422 1.183.368 2.007.762.795 1.44.944 1.875.411zm26.627-.859c.922-.995 1.573-3.289 1.208-4.255-.54-1.426-2.456-3.025-3.619-3.019-.742.004-3.182 1.224-3.915 1.957-.777.777-.902 2.51-.288 3.98.459 1.097 1.157 1.494 3.059 1.74 2.585.333 2.906.297 3.555-.403zm-20.573-2.548c.408-.339.475-2.265.11-3.222-.255-.672-1.237-1.024-2.174-.78-.533.14-1.549 1.839-1.549 2.59 0 .236.362.79.804 1.233.668.668.945.776 1.629.64.453-.092.984-.299 1.18-.461zm22.528-6.997c.065-.662-.052-.87-.638-1.137-.58-.264-.785-.259-1.07.025-.292.293-.251.495.242 1.205.725 1.044 1.358 1.004 1.466-.093zm-21 .112c.796-.363 1.047-1.008.81-2.086-.21-.959-.786-1.578-1.467-1.578-.51 0-1.838 2.182-1.838 3.02 0 .827 1.337 1.172 2.496.644zm7.27-.592c.23-.278.228-.536-.01-1.058-.427-.937-1.477-.953-1.71-.027-.293 1.166.984 1.972 1.72 1.085zm-12.47-.574c.875-.613.766-1.6-.234-2.116-1.59-.823-2.964.318-2.182 1.812.436.832 1.476.963 2.416.304zm19.535-.536c.114-.454.034-.822-.237-1.093-.368-.368-.489-.351-1.225.173-.449.32-.816.668-.816.775 0 .422.673.828 1.37.828.571 0 .775-.153.908-.683zm-23.904-.533c.253-.253-.092-.9-.48-.9-.443 0-.732.444-.516.793.18.293.75.354.996.107zm26.272-.66c.309-.501-.459-1.595-1.059-1.509-.415.06-.522.236-.45.74.133.95 1.094 1.439 1.509.768zM36.406-17.47c-6.214-1.31-9.967-4.685-11.471-10.317-.586-2.195-.656-9.693-.11-11.906 1.32-5.358 5.11-8.992 11.108-10.65 1.72-.475 2.749-.559 6.915-.559 4.194 0 5.19.082 6.957.57 6.505 1.795 10.16 5.57 11.211 11.577.497 2.838.34 8.956-.287 11.22-1.503 5.43-5.37 8.799-11.565 10.077-3.354.692-9.444.687-12.758-.012zm10.94-2.644c0-.617-.92-.744-1.144-.158-.179.465.035.687.659.687.308 0 .485-.192.485-.53zm5.3-1.213c.658-1.533.652-1.84-.04-2.325-.424-.297-.733-.328-1.257-.13-1.28.488-1.677 1.04-1.485 2.072.232 1.239.566 1.596 1.492 1.596.664 0 .843-.169 1.29-1.213zm-18.053-.428c.45-.45.394-1.521-.09-1.707-.79-.303-1.86 1.257-1.268 1.848.28.281 1.012.205 1.358-.14zm7.4-.23c1.596-.556 1.41-2.107-.332-2.772-1.254-.479-2.007-.279-2.514.668-.222.415-.119.686.55 1.449.899 1.023 1.087 1.077 2.297.655zm4.577-.255c.773-.414.63-1.24-.3-1.72-.855-.442-1.866-.437-2.011.01-.143.439.932 1.984 1.38 1.984.23 0 .649-.123.93-.274zm-16.377-.693c.63-.57.617-1.325-.026-1.669-.726-.389-1.283-.088-1.478.8-.285 1.3.516 1.763 1.504.869zm28.306-4.6c1.188-1.249 1.295-2.13.48-3.926l-.525-1.159-1.884.186c-2.496.246-3.017.477-3.37 1.49-.657 1.882-.347 2.56 1.76 3.855 1.495.92 2.341.813 3.54-.447zm-13.876.14c.892-.624 1.208-2.799 1.07-7.38-.134-4.487-.398-5.513-1.544-5.988-.969-.401-2.565-.168-3.201.469-.752.751-1.076 3.277-.943 7.346.13 3.974.418 5.193 1.336 5.636.863.417 2.632.373 3.282-.082zm-15.658-1.116c.46-1.557-.384-2.24-1.508-1.221-.635.574-.613 1.285.062 1.96.731.731 1.061.562 1.446-.74zm8.591.34c0-.21-.108-.448-.24-.53-.405-.25-1.058.138-.905.537.188.491 1.145.486 1.145-.006zm-6.085-.544a.39.39 0 0 0-.381-.397c-.442 0-.74.378-.494.625.316.316.875.17.875-.228zm3.497-2.827c-.404-.404-.703-.106-.478.478.132.345.247.38.482.144.235-.235.234-.383-.004-.622zm.948-2.12c.61-.61.377-1.27-.448-1.27-.856 0-1.274.645-.794 1.223.371.448.823.465 1.242.046zm-3.943-1.412c1-1.14 1.013-1.462.124-3.01-1.363-2.373-1.906-2.934-2.838-2.934-1.543 0-1.74.36-1.819 3.307l-.07 2.646.926.462c1.54.77 2.72.619 3.677-.471zm22.754-2.211c.393-.42.933-1.25 1.2-1.843.563-1.248.37-1.992-.874-3.365-1.07-1.18-1.906-1.7-2.734-1.7-1.028 0-2.824.767-3.129 1.337-.376.704-.32 4.296.077 4.838.344.471 3.03 1.431 4.124 1.474.367.014.915-.29 1.336-.741zm-15.972-2.423c.468-.758-1.26-1.409-1.938-.73-.493.493.646 1.605 1.29 1.26.263-.14.555-.38.648-.53zm-4.075-.642c.01-.447-.49-.446-.662.001-.113.295-.037.4.246.342.225-.047.412-.201.416-.343zm13.815-3.36c.432-.69-.186-1.806-1-1.806-.542 0-.685.163-.833.955-.128.68-.075 1.023.186 1.192.524.34 1.324.174 1.647-.34zm-8.028-.132c0-.548-.753-1.41-1.232-1.41-.522 0-.437 1.25.107 1.567.69.401 1.125.34 1.125-.157zm-2.265-2.186c.34-.375.414-.732.28-1.34-.223-1.018-.559-1.162-2.028-.873-1.036.203-1.155.305-1.228 1.061-.067.687.051.909.661 1.24 1.014.55 1.764.521 2.315-.088zm3.562-.119c.233-.28.216-.4-.074-.51-.439-.17-.694.024-.694.523 0 .458.383.452.768-.013zm7.284-1.202c.73-.806.44-1.474-.64-1.474-.707 0-.988.147-1.239.65-.608 1.22.916 1.888 1.879.824zM-1.11-17.974l-.624-.506-.073-14.825-.072-14.825-5.574-.081c-5.493-.08-5.581-.09-6.08-.706-.461-.57-.504-1.107-.504-6.238 0-5.525.01-5.622.612-6.188l.612-.575h38.425l.562.715c.54.686.56.941.482 6.34-.07 4.98-.134 5.681-.552 6.099-.418.418-1.12.48-6.151.552l-5.68.081v29.839l-.588.412c-.495.347-1.661.412-7.38.412-6.29 0-6.836-.038-7.415-.506zm12.217-5.06c1.248-.63 1.685-1.508 1.512-3.04-.076-.677-.254-1.346-.395-1.487-.142-.141-1.194-.28-2.338-.308l-2.081-.05-.729 1.323c-.92 1.67-.922 2.24-.013 3.11 1.373 1.313 2.161 1.4 4.044.451zM1.84-25.148c.346-.646.141-1.053-.532-1.053-.649 0-.782.262-.506.993.279.738.664.76 1.038.06zm1.458-2.215c.428-.312.45-.432.15-.793-.46-.555-.62-.537-1.027.114-.571.915-.025 1.339.877.68zm4.486-5.44c.513-.991.507-1.311-.034-1.91-.965-1.065-2.552-.239-2.305 1.2.239 1.39.316 1.492 1.14 1.492.613 0 .888-.18 1.199-.781zm4.055-2.446c.56-.56.356-1.006-.46-1.006-.85 0-1.204.34-.974.939.178.465.997.504 1.434.067zm-8.43-1.998c1-.563.987-1.33-.032-1.9-.648-.363-.757-.354-1.257.098-.608.55-.716 1.461-.23 1.948.416.415.546.403 1.52-.146zm5.247-1.174c-.163-.49-.733-.572-.733-.105 0 .23.188.42.419.42.23 0 .372-.142.314-.315zM3.68-41.528c.15-.282.274-.875.274-1.318 0-.64-.137-.84-.665-.973-.869-.218-1.52.314-1.29 1.054.583 1.875 1.126 2.274 1.681 1.237zm4.508.115c0-.219-.235-.397-.521-.397-.355 0-.472.127-.369.397.084.218.318.397.521.397s.369-.179.369-.397zm-4.402-6.291c.394-.288.424-.509.202-1.494-.294-1.307-.614-1.598-1.767-1.604-1.628-.008-1.91 1.207-.596 2.563.91.939 1.432 1.068 2.16.535zm-5.508-2.958c.814-.814.817-1.329.012-2.385a9.88 9.88 0 0 1-1.045-1.81c-.445-1.065-.851-1.185-2.002-.59-.837.434-1.07 1.041-1.075 2.814-.004 1.292.37 1.839 1.59 2.326 1.088.434 1.836.329 2.52-.355zm12.006-1.093c.906-.763 1.035-1.543.376-2.271-.541-.598-2.017-.637-2.586-.068-.632.632-.534 2.117.172 2.612.802.561 1.092.522 2.038-.273zm12.056-1.161c.387-.858.413-1.127.14-1.456-.388-.467-1.144-.52-1.874-.129-.675.361-.709 1.967-.05 2.351.853.496 1.302.303 1.784-.766zm-16.777.236c.941-.48.995-.844.45-3.02-.292-1.165-.65-2.266-.798-2.448-.44-.545-2.244-.406-2.871.222-.666.665-1.3 2.11-1.3 2.959 0 .612 1.2 1.96 2.249 2.524.52.28 1.446.183 2.27-.237zm11.773-.413c1.035-.678 1.413-1.606 1.106-2.72-.393-1.43-1.2-2.88-1.771-3.186-1.025-.548-2.971-.202-3.516.626-.357.543-.772 3.063-.596 3.618.234.735 2.418 2.097 3.363 2.097.413 0 1.05-.196 1.414-.435zm-27.294-.53c.182-.476-.518-1.416-1.056-1.416-.42 0-.581.465-.432 1.247.139.723 1.228.847 1.488.17zm5.236-4.128c.231-.182.496-.587.59-.9.327-1.106-1.98-2.225-2.729-1.322-.225.27-.153.621.298 1.453.615 1.131 1.114 1.34 1.841.769zm-4.288-1.522c0-.352-.177-.529-.53-.529-.51 0-.717.518-.352.882.364.364.882.157.882-.353zM109.304-18.08l-.575-.612v-42.075l.613-.575.612-.575h33.079l.575.612c.551.587.575.835.575 5.894 0 4.353-.072 5.386-.412 5.87l-.411.588h-19.02v4.763h8.563c8.263 0 8.588.019 9.26.548l.697.548v5.496c0 4.989-.044 5.537-.483 5.934-.43.39-1.465.438-9.26.438h-8.777v6.182c0 5.854-.03 6.22-.549 6.88l-.548.697h-6.682c-6.642 0-6.685-.004-7.257-.613zm6.853-3.495c1.713-.605 2.097-1.064 2.097-2.508 0-1.441-.415-2.81-.91-3-.19-.072-.868-.21-1.507-.306-.968-.145-1.29-.074-1.918.42-.843.663-1.486 1.979-1.486 3.042 0 .462.351 1.052 1.028 1.728 1.17 1.17 1.155 1.167 2.696.624zm-.171-8.041c.252-.28.42-.785.371-1.125-.072-.51-.245-.617-1.003-.617-.716 0-1.002.153-1.31.702-.329.586-.336.773-.044 1.125.475.573 1.427.532 1.985-.085zm21.274-3.816c.148-.783-1.004-1.822-1.798-1.623-1.148.288-1.338.914-.523 1.728.691.692 2.183.624 2.32-.105zm-6.114-.124c.324-.206.458-.816.38-1.723-.03-.333-.217-.455-.61-.397-.87.13-1.2.842-.765 1.655.392.731.498.78.995.465zm-10.81-.671c.163-.196.375-.748.47-1.226.145-.721.066-.953-.461-1.358-.849-.652-1.217-.624-2.264.175-.935.713-1.192 1.822-.568 2.447.431.43 2.457.403 2.824-.038zm-7.424-.901c-.107-.558-.577-.523-.696.052-.05.24.095.41.35.41.272 0 .402-.173.346-.462zm13.412-1.654c0-1.142-.034-1.194-.834-1.272-.617-.06-.94.07-1.24.498-.371.53-.358.642.166 1.35.413.559.754.75 1.239.693.605-.07.669-.192.669-1.269zm1.2-3.192c.314-.587.046-1.116-.794-1.565-.598-.32-2.126.45-2.126 1.073 0 1.067 2.396 1.471 2.92.492zm-12.218-2.696c.604-.289.71-.521.779-1.706.069-1.195-.001-1.425-.543-1.78-.343-.224-.982-.48-1.42-.567-.683-.137-.92-.021-1.64.799-1.04 1.183-1.091 2.182-.166 3.18.724.781 1.47.8 2.99.074zm5.726.332a.54.54 0 0 0 .007-.518c-.217-.352-.933-.035-.933.414 0 .423.682.5.926.104zm-3.186-7.126c.084-.135.026-.324-.13-.42-.39-.242-1.12.075-.918.4.207.335.846.347 1.048.02zm-5.942-.4c0-.278-.508-.396-.659-.151-.091.147.02.268.247.268s.412-.052.412-.116zm10.703-1.248c.861-.392.966-1.9.163-2.33-.995-.532-1.828-.329-2.286.557-.835 1.615.332 2.59 2.123 1.773zm16.682-2.295c0-.478-.518-.39-.621.105-.057.276.042.397.265.323.195-.066.356-.258.356-.428zm-10.424-.654c.847-.575.898-.697.892-2.116-.01-1.979-.588-2.605-2.557-2.766-1.23-.1-1.48-.034-2.011.534-.333.357-.672 1.056-.753 1.554-.133.822-.026 1.017 1.19 2.154.735.688 1.562 1.25 1.838 1.25s.906-.274 1.4-.61zm-12.099-1.3c.225-.36.174-.541-.237-.852-1.034-.782-2.2-.205-1.846.913.138.434.356.539.987.475.446-.044.94-.286 1.096-.537zm18.008.077c.317-.351.402-.701.27-1.124-.248-.793-.588-1.002-1.633-1.007-1.479-.007-1.749 1.573-.403 2.357.7.408 1.256.337 1.766-.226zm-22.208-1.739c0-.99-.05-1.058-.762-1.058-1.086 0-1.633.865-1.061 1.681.292.417.631.574 1.12.517.63-.073.703-.191.703-1.14zm27.91.798c.438-.527.148-1.194-.518-1.194-.295 0-.539.089-.54.198-.003.11-.076.466-.164.794-.126.471-.05.595.368.595.29 0 .675-.177.854-.393zm9.322 38.346-.588-.412v-21.64c0-20.628.023-21.66.484-22.078.422-.382 1.297-.438 6.838-.438 5.82 0 6.392.041 6.793.484.4.442.438 2.356.438 22.078v21.594l-.589.412c-.49.344-1.595.412-6.688.412-5.092 0-6.197-.068-6.688-.412zm2.434-1.072c.249-.096.418-.473.418-.932 0-.599-.164-.835-.728-1.051-1.332-.51-1.983.33-1.112 1.438.585.743.745.805 1.422.545zm4.474-1.052c-.182-.475-.881-.492-.881-.022 0 .492.253.693.67.533.196-.075.29-.305.211-.51zm3.878-.847c-.002-.104-.077-.463-.167-.798-.208-.779-1.139-.69-1.443.138-.299.813.383 1.507 1.103 1.122.28-.15.509-.358.507-.462zm-7.073-2.769c.205-.608-.123-1.257-.636-1.257-.64 0-.916.677-.487 1.194.398.48.972.512 1.123.063zm6.004-1.48 1.177-1.014-.475-1.244c-.618-1.619-1.39-2.125-2.97-1.948-1.408.16-1.855.528-2.337 1.93-.44 1.282-.336 1.539 1.012 2.494 1.476 1.046 2.177 1.004 3.593-.217zm-6.953-2.032c.222-.222.337-.58.254-.794-.23-.6-1.141-.473-1.313.185-.265 1.015.318 1.35 1.06.609zm5.333-4.812c.558-.415.725-.784.788-1.743.123-1.865-.342-3.245-1.206-3.577-2.28-.878-3.425-.596-4.41 1.086-.968 1.65-.887 2.36.436 3.795 1.084 1.176 1.157 1.208 2.401 1.089.706-.068 1.602-.36 1.991-.65zm3.219-3.38c.401-.484.167-1.194-.394-1.194-.486 0-.783.625-.566 1.19.194.504.543.506.96.004zm.63-4.436c.278-1.04.193-1.297-.402-1.209-.695.104-1.162.787-.937 1.372.247.645 1.152.536 1.339-.163zm-6.337-.094c.559-.215.535-1.325-.034-1.544-.299-.114-.604.028-.899.419-.718.952-.212 1.564.933 1.125zm-3.07-1.094c-.102-.884-.89-1.127-1.137-.35-.221.697.021 1.075.69 1.075.422 0 .514-.147.447-.725zm5.98-.493c.918-.353.277-1.692-.81-1.692-.798 0-1.022.446-.61 1.216.348.65.678.76 1.42.476zm4.21-4.49c-.22-.575-1.146-.47-1.146.13 0 .28.15.56.331.626.471.17.987-.309.816-.755zm-7.186-.702c-.357-.357-1.103-.066-1.103.43 0 .212.208.43.463.483.568.12 1.023-.53.64-.913zm-1.548-1.896c.151-.393-.84-1.483-1.35-1.483-.528 0-.932 1.038-.573 1.472.404.486 1.738.494 1.923.011zm8.163-.598c.974-.882.373-2.341-.89-2.162-.5.07-.626.273-.695 1.118-.116 1.415.63 1.907 1.585 1.044zm-6.514-2.861c.58-1.391.474-1.897-.57-2.693-.898-.685-.995-.704-1.654-.326-.603.345-.693.558-.648 1.533.072 1.547.673 2.404 1.687 2.404.664 0 .867-.157 1.185-.918zm6.183-1.573c.637-.678.6-1.288-.145-2.47-.757-1.201-3.274-.54-3.274.86 0 .635.505 1.166 1.72 1.808 1.029.544.998.547 1.699-.198zm-5.7-6.037c.221-.353.187-.56-.15-.896-.793-.793-1.975.243-1.26 1.104.41.496 1.023.405 1.41-.208zm6.25-.6a.398.398 0 0 0-.397-.397.398.398 0 0 0-.397.396c0 .219.179.397.397.397a.398.398 0 0 0 .397-.397zm-4.146-.243c.164-.427-.517-.794-.756-.407-.18.29.066.782.391.782.122 0 .286-.169.365-.375zm15.542 42.276c-.54-.687-.548-.921-.548-15.888v-15.19l.65-.649.649-.65h6.062c5.731 0 6.1.03 6.758.55l.698.547v15.46c0 15.106-.012 15.47-.53 15.987-.5.5-.881.53-6.86.53h-6.33zm10.512-3.06c.657-.658.203-2.064-.668-2.064-.192 0-.485.297-.65.66-.249.546-.218.753.179 1.19.558.617.707.645 1.139.214zm-3.538-1.157c.566-.567.522-1.338-.132-2.255-.375-.528-.774-.769-1.27-.769-.975 0-1.358.449-1.358 1.593 0 .816.127 1.02.86 1.385 1.102.548 1.39.555 1.9.046zm3.278-2.56c-.046-.328-.203-.596-.349-.596-.146 0-.303.268-.35.595-.057.41.052.595.35.595s.407-.185.35-.595zm2.43-.067c0-.218-.113-.397-.25-.397-.333 0-.572.413-.361.625.298.298.61.181.61-.228zm-10.635-1.654c-.107-.557-.577-.522-.696.053-.05.24.096.41.35.41.272 0 .402-.173.346-.463zm2.961-.478a.39.39 0 0 0-.397-.382c-.398 0-.544.559-.227.875.247.247.624-.051.624-.493zm6.236-.462c.598-.515.68-.741.522-1.458-.243-1.107-.799-1.637-1.717-1.637-.847 0-1.134.288-1.565 1.568-.272.806-.241.975.272 1.522.733.78 1.585.782 2.488.005zm-8.144-1.642c.052-.36-.186-.688-.728-1.008-1.192-.704-1.732-.099-1.05 1.176.38.71 1.67.588 1.778-.168zm3.365-1.19c.09-.147.09-.504-.002-.794-.198-.623-1.323-.723-1.547-.138-.287.747 1.135 1.601 1.55.932zm6.204-2.497c.827-.996-.235-2.333-1.423-1.792-1.174.535-.775 2.174.53 2.174.316 0 .719-.172.893-.382zm-10.836-.263c0-.544-.548-.811-.806-.393-.12.193-.159.447-.087.563.223.36.893.232.893-.17zm5.473-.46c.641-.601.803-1.392.343-1.676-.149-.092-.684-.03-1.19.137-.708.234-.922.45-.922.932 0 .345.209.75.463.897.623.363.609.366 1.306-.29zm1.827-4.351c-.136-.354-.243-.383-.493-.133s-.236.372.067.559c.493.304.647.15.426-.426zm-5.96-.374c.678-.362.652-1.22-.048-1.594-.445-.239-.645-.215-.975.115-.357.357-.365.507-.056 1.084.41.766.396.76 1.08.395zm9.508-1.165c0-.87-.452-1.094-1.074-.531-.39.353-.441.548-.215.82.508.612 1.29.437 1.29-.29zm-3.366-1.248c.648-.873.67-1.93.05-2.613-.598-.662-1.2-.657-2.528.02-1.231.629-1.442 1.015-1.105 2.03.494 1.491 2.642 1.829 3.583.563zm-5.63-3.795a.39.39 0 0 0-.381-.397c-.442 0-.74.378-.493.625.316.316.874.17.874-.228zm7.784-.028c.59-.227.523-1.353-.102-1.687-.43-.23-.596-.163-.957.389-.353.538-.374.744-.109 1.063.362.436.547.473 1.168.235zm-5.058-1.795c.07-.318-.802-.85-1.026-.627-.305.305.13 1.038.562.948.227-.047.436-.192.464-.321zm11.47 28.459c-.24-.266-.437-.725-.437-1.02 0-.293 2.37-3.912 5.267-8.04l5.268-7.506-4.653-6.875c-2.56-3.782-4.704-7.137-4.765-7.457-.067-.353.107-.799.444-1.136.532-.532.812-.555 6.76-.555 3.845 0 6.442.107 6.827.283.342.156 1.555 1.707 2.695 3.447s2.105 3.13 2.143 3.09c.039-.04 1.02-1.515 2.183-3.276 1.436-2.176 2.313-3.256 2.738-3.37.344-.092 3.274-.169 6.512-.17 5.537-.004 5.918.027 6.416.525.291.29.53.706.53.922 0 .368-2.237 3.766-7.224 10.977-1.154 1.67-2.156 3.185-2.226 3.367-.07.182 2.226 3.638 5.102 7.68 2.876 4.042 5.284 7.62 5.35 7.953.07.353-.075.821-.35 1.125-.444.49-.847.52-7.278.52h-6.807l-.89-.996c-.49-.548-1.651-2.156-2.58-3.572-.929-1.417-1.762-2.57-1.852-2.564-.09.007-1.116 1.39-2.28 3.073-1.164 1.683-2.4 3.285-2.748 3.56-.58.458-1.162.499-7.169.499-5.998 0-6.574-.04-6.975-.484zm3.644-2.339c.093-.242.06-.55-.073-.683-.298-.299-1.363.319-1.363.791 0 .496 1.24.403 1.436-.108zm23.552-.335c.338-.374.361-.615.123-1.297-.25-.717-.42-.837-1.185-.837-.72 0-.97.15-1.295.777-.47.91-.333 1.437.466 1.794.707.316 1.343.169 1.89-.437zm6.768-1.615c.583-1.09-.57-2.317-1.473-1.567-.454.377-.468.53-.127 1.428.314.826 1.192.902 1.6.14zm-18.576-.85c-.065-.681-.217-.879-.73-.95-.937-.133-1.485.679-.897 1.329.24.264.722.481 1.073.481.56 0 .627-.105.554-.86zm-9.258.154c-.128-.663-.747-.754-.747-.11 0 .325.171.552.417.552.246 0 .381-.18.33-.442zm19.503-2.277c.61-.526.675-.727.512-1.6-.257-1.369-.673-1.698-2.42-1.917-1.36-.17-1.549-.13-1.985.408-.732.904-.592 1.425.703 2.619 1.359 1.252 2.16 1.376 3.19.49zm-13.447.076c1.07-.003 1.126-.045 1.431-1.062.41-1.368.042-2.228-1.206-2.823-.905-.432-.938-.426-2.01.316-1.332.924-1.843 1.62-1.843 2.513 0 1 .505 1.383 1.588 1.208.51-.082 1.427-.15 2.04-.152zm7.475-5.114c.93-.447 1.276-1.809.687-2.708-.527-.804-2.084-1.535-2.793-1.31-.269.086-.925.638-1.458 1.228-.786.87-.936 1.205-.793 1.775.333 1.337.906 1.699 2.38 1.503.73-.096 1.619-.316 1.977-.488zm7.8-1.034c.227-.323.412-.79.412-1.036 0-.433-1.487-1.55-2.063-1.55-.511 0-1.112.82-1.112 1.519 0 1.523 1.923 2.266 2.763 1.067zm-5.819-4.529c.383-.28.448-.553.308-1.297-.176-.94-.555-1.258-1.498-1.258-.48 0-1.046.711-1.046 1.317 0 .345 1.195 1.593 1.525 1.593.125 0 .444-.16.711-.355zm2.859-.313c.015-.142-.172-.296-.416-.343-.314-.06-.396.039-.28.341.172.447.648.448.696.002zm-7.796-1.746c.093-.489-.542-.82-1.135-.592-.218.084-.397.385-.397.67 0 .41.153.501.725.435.413-.047.76-.268.807-.513zm9.838-1.678c.401-.484.123-2.37-.433-2.925-.215-.215-.862-.391-1.437-.391-.868 0-1.098.116-1.357.686-.29.636-.226.771.865 1.828 1.261 1.22 1.848 1.42 2.362.802zm3.447-.01c.274-.33.238-.396-.217-.396-.58 0-.94.342-.658.625.267.266.519.2.875-.228zm-18.139-1.166c.25-.404-.138-1.058-.536-.905-.492.189-.487 1.146.006 1.146.21 0 .448-.108.53-.24zm-3.69-2.405c0-1.036-.396-1.279-.864-.53-.264.424-.264.636 0 1.06.468.749.865.506.865-.53zm22.755-.4c0-1.231-.047-1.325-.702-1.401-.484-.056-.828.099-1.108.498-.377.538-.355.644.305 1.475 1.004 1.265 1.505 1.074 1.505-.572zm-16.862.615c-.163-.49-.733-.572-.733-.105 0 .23.188.42.419.42.23 0 .372-.142.314-.315zm-4.58-4.119c.09-.233.009-.575-.178-.76-.276-.274-.458-.249-.962.134-.575.435-.59.504-.191.902.485.484 1.087.36 1.33-.276zm3.318-.197a.398.398 0 0 0-.397-.397.398.398 0 0 0-.397.397c0 .218.179.397.397.397a.398.398 0 0 0 .397-.397zm19.05-.514c0-.421-.48-.814-.712-.582-.218.217.122.964.439.964.15 0 .273-.172.273-.382zm-49.458-6.93c-.502-.638-.548-1.05-.548-4.86 0-3.81.046-4.22.548-4.858l.548-.697h12.094l.549.697c.502.638.548 1.049.548 4.859s-.046 4.22-.548 4.859l-.549.697h-12.094zm10.431-2.74c.237-.746-.043-1.06-.94-1.06-.574 0-.779.125-.779.475 0 1.062 1.415 1.543 1.719.585zm-7.393-.555c.272-.44-.34-.947-.706-.582-.305.306-.114.87.295.87.128 0 .313-.13.41-.288zm3.592-1.636c-.354-.353-.837.005-.654.484.12.31.233.328.53.082.239-.199.284-.405.124-.566zm-1.622-.986c0-.353-.177-.53-.53-.53-.51 0-.716.518-.352.882s.882.157.882-.352z"
                  transform="translate(16.458 66.39)"
                />
              </svg>
            </svg>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="justify-content-end">
            <Link className="nav-link mr-2" to="/">
              Movies
            </Link>
            {getToken() ? (
              <>
                {' '}
                <Link className="nav-link mr-2" to={`/users/${user}`}>
                  Profile
                </Link>
                <p className="nav-link" onClick={logOut}>
                  Log Out
                </p>
              </>
            ) : (
              <>
                {' '}
                <Link className="nav-link" to="/register">
                  Sign Up
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
