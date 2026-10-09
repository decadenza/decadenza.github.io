
export default function Home() {
    return (<div>
        <h1>Welcome</h1>
        All human beings are born free and equal in dignity and rights.
        <div className="html-showcase-container">
            {/* ==================== HEADER & NAVIGATION ==================== */}
            <header>
                <h1>Main HTML Elements Showcase</h1>
                <p>
                    A pure HTML reference snippet displaying semantic tags, typography, media, tables, forms, and interactive elements.
                </p>
                <nav>
                    <ul>
                        <li><a href="#headings">Headings &amp; Text</a></li>
                        <li><a href="#lists">Lists</a></li>
                        <li><a href="#table">Table</a></li>
                        <li><a href="#form">Form &amp; Inputs</a></li>
                        <li><a href="#media">Media &amp; Embeds</a></li>
                        <li><a href="#interactive">Interactive &amp; Semantic</a></li>
                    </ul>
                </nav>
            </header>

            <hr />

            <main>
                {/* ==================== HEADINGS & TYPOGRAPHY ==================== */}
                <section id="headings">
                    <h2>Headings &amp; Text Formatting</h2>

                    <h1>Heading 1 (h1)</h1>
                    <h2>Heading 2 (h2)</h2>
                    <h3>Heading 3 (h3)</h3>
                    <h4>Heading 4 (h4)</h4>
                    <h5>Heading 5 (h5)</h5>
                    <h6>Heading 6 (h6)</h6>

                    <p>
                        This is a standard paragraph (<code>&lt;p&gt;</code>) containing various text inline formatting tags:<br />
                        <strong>Bold text</strong> using <code>&lt;strong&gt;</code>,{' '}
                        <b>bold text</b> using <code>&lt;b&gt;</code>,{' '}
                        <em>emphasized text</em> using <code>&lt;em&gt;</code>,{' '}
                        <i>italic text</i> using <code>&lt;i&gt;</code>,{' '}
                        <mark>highlighted text</mark> using <code>&lt;mark&gt;</code>,{' '}
                        <small>small text</small> using <code>&lt;small&gt;</code>,{' '}
                        <del>deleted text</del> using <code>&lt;del&gt;</code>,{' '}
                        <ins>inserted text</ins> using <code>&lt;ins&gt;</code>,{' '}
                        <sub>subscript</sub> H<sub>2</sub>O using <code>&lt;sub&gt;</code>, and{' '}
                        <sup>superscript</sup> E=mc<sup>2</sup> using <code>&lt;sup&gt;</code>.
                    </p>

                    <p>
                        Line break demonstration:<br />
                        First line.<br />
                        Second line after a <code>&lt;br&gt;</code> tag.
                    </p>

                    <h3>Quotations &amp; Code</h3>
                    <blockquote cite="https://en.wikipedia.org/wiki/HTML">
                        <p>
                            HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.
                        </p>
                    </blockquote>
                    <p>
                        According to the specification, <q>inline quotations use the <code>&lt;q&gt;</code> tag</q>.
                    </p>

                    <p>
                        An abbreviation example: <abbr title="HyperText Markup Language">HTML</abbr>.
                    </p>

                    <p>
                        Code block using <code>&lt;pre&gt;</code> and <code>&lt;code&gt;</code>:
                    </p>
                    <pre>
                        <code>{`function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("World");`}</code>
                    </pre>
                </section>

                <hr />

                {/* ==================== LISTS ==================== */}
                <section id="lists">
                    <h2>Lists</h2>

                    <h3>Unordered List (<code>&lt;ul&gt;</code>)</h3>
                    <ul>
                        <li>First un-ordered item</li>
                        <li>
                            Second un-ordered item
                            <ul>
                                <li>Nested list item A</li>
                                <li>Nested list item B</li>
                            </ul>
                        </li>
                        <li>Third un-ordered item</li>
                    </ul>

                    <h3>Ordered List (<code>&lt;ol&gt;</code>)</h3>
                    <ol>
                        <li>First step</li>
                        <li>Second step</li>
                        <li>Third step</li>
                    </ol>

                    <h3>Description List (<code>&lt;dl&gt;</code>)</h3>
                    <dl>
                        <dt>HTML</dt>
                        <dd>HyperText Markup Language</dd>
                        <dt>CSS</dt>
                        <dd>Cascading Style Sheets</dd>
                    </dl>
                </section>

                <hr />

                {/* ==================== TABLE ==================== */}
                <section id="table">
                    <h2>Data Table (<code>&lt;table&gt;</code>)</h2>
                    <table>
                        <caption>Employee Directory</caption>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>101</td>
                                <td>Alice Smith</td>
                                <td>Frontend Engineer</td>
                                <td>Engineering</td>
                            </tr>
                            <tr>
                                <td>102</td>
                                <td>Bob Jones</td>
                                <td>UI/UX Designer</td>
                                <td>Design</td>
                            </tr>
                            <tr>
                                <td>103</td>
                                <td>Charlie Brown</td>
                                <td>Product Manager</td>
                                <td>Product</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={4}>Total Employees: 3</td>
                            </tr>
                        </tfoot>
                    </table>
                </section>

                <hr />

                {/* ==================== FORM & INPUTS ==================== */}
                <section id="form">
                    <h2>Form &amp; Input Controls (<code>&lt;form&gt;</code>)</h2>

                    <form onSubmit={(e) => e.preventDefault()}>

                        <fieldset>
                            <legend>Personal Information</legend>

                            <p>
                                <label htmlFor="text-input">Text Input:</label><br />
                                <input type="text" id="text-input" name="username" placeholder="Enter your username" required />
                            </p>

                            <p>
                                <label htmlFor="email-input">Email Input:</label><br />
                                <input type="email" id="email-input" name="email" placeholder="name@example.com" />
                            </p>

                            <p>
                                <label htmlFor="password-input">Password Input:</label><br />
                                <input type="password" id="password-input" name="password" />
                            </p>

                            <p>
                                <label htmlFor="number-input">Number Input:</label><br />
                                <input type="number" id="number-input" name="age" min="1" max="120" defaultValue={25} />
                            </p>

                            <p>
                                <label htmlFor="tel-input">Telephone Input:</label><br />
                                <input type="tel" id="tel-input" name="phone" placeholder="123-456-7890" />
                            </p>

                            <p>
                                <label htmlFor="url-input">URL Input:</label><br />
                                <input type="url" id="url-input" name="website" placeholder="https://example.com" />
                            </p>

                            <p>
                                <label htmlFor="search-input">Search Input:</label><br />
                                <input type="search" id="search-input" name="search" placeholder="Search site..." />
                            </p>
                        </fieldset>

                        <br />

                        <fieldset>
                            <legend>Selectors &amp; Pickers</legend>

                            <p>
                                <label htmlFor="date-input">Date Input:</label><br />
                                <input type="date" id="date-input" name="birthdate" />
                            </p>

                            <p>
                                <label htmlFor="time-input">Time Input:</label><br />
                                <input type="time" id="time-input" name="appointment_time" />
                            </p>

                            <p>
                                <label htmlFor="color-input">Color Picker:</label><br />
                                <input type="color" id="color-input" name="favorite_color" defaultValue="#ff0000" />
                            </p>

                            <p>
                                <label htmlFor="range-input">Range Slider (0 to 100):</label><br />
                                <input type="range" id="range-input" name="volume" min="0" max="100" defaultValue={50} />
                            </p>

                            <p>
                                <label htmlFor="file-input">File Upload:</label><br />
                                <input type="file" id="file-input" name="attachment" />
                            </p>

                            <p>
                                <label htmlFor="select-dropdown">Dropdown Select:</label><br />
                                <select id="select-dropdown" name="country" defaultValue="us">
                                    <optgroup label="North America">
                                        <option value="us">United States</option>
                                        <option value="ca">Canada</option>
                                    </optgroup>
                                    <optgroup label="Europe">
                                        <option value="uk">United Kingdom</option>
                                        <option value="fr">France</option>
                                    </optgroup>
                                </select>
                            </p>

                            <p>
                                <label htmlFor="datalist-input">Datalist Input (Autocomplete):</label><br />
                                <input list="browsers" id="datalist-input" name="browser" placeholder="Choose or type a browser" />
                                <datalist id="browsers">
                                    <option value="Chrome" />
                                    <option value="Firefox" />
                                    <option value="Safari" />
                                    <option value="Edge" />
                                    <option value="Brave" />
                                </datalist>
                            </p>
                        </fieldset>

                        <br />

                        <fieldset>
                            <legend>Checkboxes, Radios &amp; Textarea</legend>

                            <p>
                                Single Checkbox:<br />
                                <label>
                                    <input type="checkbox" name="subscribe" value="newsletter" defaultChecked /> Subscribe to newsletter
                                </label>
                            </p>

                            <p>
                                Radio Options:<br />
                                <label>
                                    <input type="radio" name="contact_pref" value="email" defaultChecked /> Email
                                </label><br />
                                <label>
                                    <input type="radio" name="contact_pref" value="phone" /> Phone
                                </label>
                            </p>

                            <p>
                                <label htmlFor="textarea-field">Textarea:</label><br />
                                <textarea id="textarea-field" name="comments" rows={4} cols={40} placeholder="Type your message here..." />
                            </p>
                        </fieldset>

                        <br />

                        <fieldset>
                            <legend>Form Buttons</legend>
                            <input type="submit" value="Submit Input" />
                            <input type="reset" value="Reset Input" />
                            <button type="button" onClick={() => alert('Button Clicked!')}>
                                Standard &lt;button&gt;
                            </button>
                        </fieldset>

                    </form>
                </section>

                <hr />

                {/* ==================== MEDIA ELEMENTS ==================== */}
                <section id="media">
                    <h2>Media Elements</h2>

                    <h3>Image (<code>&lt;img&gt;</code>) &amp; Figure</h3>
                    <figure>
                        <img src="https://via.placeholder.com/300x150" alt="Placeholder graphic displaying 300 by 150 pixels" />
                        <figcaption>Figure 1: A sample image placeholder with a caption.</figcaption>
                    </figure>

                    <h3>Audio (<code>&lt;audio&gt;</code>)</h3>
                    <audio controls>
                        <source src="sample.mp3" type="audio/mpeg" />
                        <source src="sample.ogg" type="audio/ogg" />
                        Your browser does not support the audio element.
                    </audio>

                    <h3>Video (<code>&lt;video&gt;</code>)</h3>
                    <video width="320" height="240" controls>
                        <source src="movie.mp4" type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </section>

                <hr />

                {/* ==================== INTERACTIVE & SEMANTIC ==================== */}
                <section id="interactive">
                    <h2>Interactive &amp; Structural Elements</h2>

                    <h3>Details &amp; Summary</h3>
                    <details>
                        <summary>Click here to expand additional information</summary>
                        <p>This content is hidden by default and revealed when the user clicks the summary element.</p>
                    </details>

                    <h3>Progress &amp; Meter</h3>
                    <p>
                        Progress bar: <progress value={70} max={100}>70%</progress><br />
                        Meter gauge: <meter value={0.6} min={0} max={1.0}>60%</meter>
                    </p>

                    <h3>Generic Containers</h3>
                    <div style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
                        This is a nested block-level container (<code>&lt;div&gt;</code>) with custom inline styling, containing an inline <span><code>&lt;span&gt;</code> tag</span>.
                    </div>
                </section>
            </main>


        </div>




    </div >
    );

}