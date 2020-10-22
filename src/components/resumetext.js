import React from 'react';

const ResumeText = () => (
  <div className="resume">
    <div className="contact textblock">
      <div className="digits centerBox">
          <h3 className="inlineHeader"><span className="small">email: </span>john_shenk@hotmail.com</h3>
          <h3 className="inlineHeader"><span className="small">phone: </span>815-519-7025</h3>
          <h3 className="inlineHeader"><span className="small">github: </span>github.com/stinkyfingers <a href="https://github.com/stinkyfingers" target="_blank" rel="noopener noreferrer">[go]</a></h3>
          <h3 className="inlineHeader"><span className="small">bitbucket: </span>bitbucket.com/stinkyfingers<a href="https://bitbucket.com/stinkyfingers" target="_blank" rel="noopener noreferrer">[go]</a></h3>
      </div>
    </div>

    <div className='empty' />

    <div className="objective textblock">
      <div className="centerBox">
        <div className="leftAlign">
          <div>
            <ul className="objectiveList">
              <li>6 years of professional full-stack software development experience.</li>
              <li>Expertise architecting applications for distributed, cloud-based, serverless environments.</li>
              <li>Proficiency across multiple cloud infrastructures (IaaS), languages, and tools.</li>
              <li>Experience developing applications, packages, and algorithms for complex data analysis.</li>
              <li>Proven track record of leadership.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className='empty' />

    <div className="objective textblock">
      <div className="centerBox">
        <h3>Expertise</h3>
        <div>
          Go (Golang) | Javascript | ReactJS | NodeJS | Python | MySql/Aurora | MongoDB | AWS  | Docker | Git | HTML/CSS | Linux | Windows | RESTful APIs | CLIs | Project Planning | Agile
        </div>
      </div>
    </div>

    <div className='empty' />

    <div className="experience textblock">
      <div className="centerBox">
        <div className="leftAlign">
          <h3>Experience</h3>

          <div className="job">
            <h4>Rackspace - Remote</h4>
            <div>2018-Present</div>
            <div>Software Engineer III</div>
            <ul className="jobDescription">
              <li>Built CLI to provide customers ephemeral, monitored access to AWS EC2 resources via SSH through SSM tunnels.</li>
              <li>Built largely serverless APIs + backend to create, place, and retrieve temporary user credentials & ssh keys on AWS resources and provide resource state.</li>
              <li>Built web UI to provide authorized access to a user's AWS resource pool.</li>
              <li>Built web application to facilitate patching cloud resources.</li>
              <li>Built web and CLI integration tests to assure proper functionality of components during CI runs.</li>
              <li>PCI Compliance.</li>
              <li>Hosted regular brown bag sessions demonstrating and explaining our tech.</li>
              <li>Tech: Go(Golang), Javascript/ReactJS/NodeJS, bash scripting, AWS Lambda/Step Functions/DynamoDB/Cloudwatch/EC2/SSM/S3.</li>
              <li>Infrastructure & CI/CD: AWS ECS/ECR/DynamoDB, Terraform, Ansible, Docker, Git, Jenkins, Linux/RHEL/Debian/Windows, CircleCI, Nginx.</li>
            </ul>
          </div>

          <div className="job">
            <h4>EvengX, LLC - Remote</h4>
            <div>2017-2018</div>
            <div>Lead Software Engineer</div>
            <ul className="jobDescription">
              <li>Lead a team in architecting a modular, extensible security/compliance platform that resides on distributed nodes on a network.</li>
              <li>Implemented 3rd party software into our platform including: Suricata, OSquery, Iptables, Windivert.</li>
              <li>Developed PaaS product modules which: quarantined infected machines, detected/blocked network attacks, detected malicious files, communicated w/ trusted endpoints, updated status.</li>
              <li>Tech: Go(Golang), Python, MySql, MongoDB, Docker, Javascript/ReactJS/NodeJS, Bash scripting, C++.</li>
              <li>Infrastructure & CI/CD: AWS ECS/ECR/Aurora, Docker, Git, Buildbot, Linux/RHEL/Debian/Windows.</li>
            </ul>
          </div>

          <div className="job">
            <h4>TrustPipe Security, LLC (acquired by EvengX, above) - Remote</h4>
            <div>2016-2017</div>
            <div>Software Engineer</div>
            <ul className="jobDescription">
              <li>Developed pattern-matching & pattern-extracting algorithms for identifying nth-degree Longest Common Substrings (LCS) using Directional Acyclic Graphs (DAG).</li>
              <li>Developed applications for isolating and learning key portions of network packets (the "DNA" of network attacks), implementing the company's patents.</li>
              <li>Developed testing framework and user interface for running our product against malicious & non-malicious network traffic and storing/retrieving results & Packet Captures (PCAPs).</li>
              <li>Tech: Go(Golang), Python, MySql, MongoDB, Javascript/ReactJS/NodeJS.</li>
              <li>Infrastructure & CI/CD: AWS ECS/ECR/ElasticBeanstalk, Docker, Git, Jenkins, Linux/RHEL/Debian/Windows.</li>
            </ul>
          </div>

          <div className="job">
            <h4>Curt Group, LLC - Eau Claire, WI</h4>
            <div>2014-2016</div>
            <div>Web Developer II - eCommerce</div>
            <ul className="jobDescription">
              <li>Developed public API for vehicle part fitment consumed by thousands of retailers, serving millions of requests. </li>
              <li>Build multiple consumer-facing company websites.</li>
              <li>Implemented "Envision", a 3rd-party app that enabled users to visualize our products on their own vehicles.</li>
              <li>Engineered isomorphic apps to allow indexing by search engines for SEO benefits.</li>
              <li>Tech: Go(Golang), Javascript/NodeJS/ReactJS/AngularJS/JQuery, C#, MySql, MongoDB, Redis, Elasticsearch.</li>
              <li>Infrastructure & CI/CD: Google Cloud (GCP), Compute Engine, App Engine, Kubernetes, Docker, Git, Jenkins, Drone.io, Nginx.</li>
            </ul>
          </div>

          <div className="job">
            <h4>JB Systems, LLC - Eau Claire, WI</h4>
            <div>Jan - June 2014</div>
            <div>Developer Intern</div>
            <ul className="jobDescription">
              <li>Developed web applications for scheduling/attending conferences, tracking product inventory, and scheduling shuttles.</li>
              <li>Tech: PHP, MySql, Javascript/JQuery, Codeigniter, HTML/CSS.</li>
            </ul>
          </div>

          <h4 className="ital">Non-Software:</h4>

          <div className="job">
            <h4>Inter-State Studio - Eau Claire, WI</h4>
            <div>2006 - 2014</div>
            <div>Territory Manager</div>
          </div>

          <div className="job">
            <h4>Shenk Products, Inc. (d/b/a Big Donkey Pizza) - Eau Claire, WI</h4>
            <div>2010 - 2014</div>
            <div>Owner</div>
          </div>

        </div>
      </div>
    </div>

    <div className='empty' />

    <div className="education textblock">
      <div className="centerBox">
        <div className="leftAlign">

          <h3>Degrees</h3>
          <div className="degrees">
            <div className="job">
              <h4>AS in IT/ Software Development</h4>
              <div>2014</div>
              <div>Chippewa Valley Technical College</div>
            </div>
          </div>

          <div className="degrees">
            <div className="job">
              <h4>MBA</h4>
              <div>2003</div>
              <div>University Of Illinois at Chicago</div>
            </div>
          </div>

          <div className="degrees">
            <div className="job">
              <h4>BS in Mass Communications</h4>
              <div>2000</div>
              <div>Illinois State University</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='empty' />

    <div className="certification textblock">
      <div className="leftAlign">
        <h3>Certificates</h3>
        <div className="degrees">
          <div className="job">
            <h4>IT Database Analyst and Management</h4>
            <div>2013</div>
            <div>Chippewa Valley Technical College</div>
          </div>
        </div>

        <div className="degrees">
          <div className="job">
            <h4>IT Mobile Application Development (Android)</h4>
            <div>2013</div>
            <div>Chippewa Valley Technical College</div>
          </div>
        </div>

        <div className="degrees">
          <div className="job">
            <h4>IT .NET Programming</h4>
            <div>2013</div>
            <div>Chippewa Valley Technical College</div>
          </div>
        </div>

        <div className="degrees">
          <div className="job">
            <h4>IT Java</h4>
            <div>2014</div>
            <div>Chippewa Valley Technical College</div>
          </div>
        </div>

        <div className="degrees">
          <div className="job">
            <h4>IT Web Development</h4>
            <div>2014</div>
            <div>Chippewa Valley Technical College</div>
          </div>
        </div>
      </div>
    </div>

    <div className='empty' />

    <div className="references textblock">
      <div className="centerBox">
        <div className="leftAlign">
          <h3>Professional References</h3>
          <div>Matt George, Product Manager, Amazon Web Services (formerly Development Manager, Rackspace)  615-519-4950</div>
          <div>Doug Valente, VP, Tideworks (fomerly COO, EvengX) 425-614-9970</div>
          <div>Martín Quiroga, Product Manager, Lending Club (formerly Development Manager, EvengX)   415-307-6434</div>
          <div>Rebecca June, Project Manager, Evengx 425-610-6143</div>
          <div>PJ McGinley, eCommerce Bus. Manager, CUNA Mutual (formerly eCommerce Manager, Curt)  715-456-4039</div>
          <div>Broc Seigneurie, Developer, CVTC  (former Coworker)    715-820-1432</div>
          <div>Alex Ninneman, eCommerce Dev,  PowerChord (formerly Development Manager, Curt)  715-308-2604</div>
        </div>
      </div>
    </div>

    <div className='empty' />

    <div className="goodies textblock">
      <div className="centerBox">
        <div className="leftAlign">
          <h3>Etc.</h3>
            <div>Publication: &nbsp;
                <a href="https://medium.com/@johnshenk77/use-go-grpc-to-create-a-platform-that-implements-modules-in-other-languages-430949e22a1d" target="_blank" rel="noopener noreferrer">
              Use Go and gRPC to Create a Modular Platform</a>
            </div>
            <div>Publication: &nbsp;
                <a href="https://medium.com/@johnshenk77/create-a-simple-chat-application-in-go-using-websocket-d2cb387db836" target="_blank" rel="noopener noreferrer">
              Create a Chat Application in Go Using WebSocket</a>
            </div>
        </div>
      </div>
    </div>

  </div>
);


export default ResumeText;
