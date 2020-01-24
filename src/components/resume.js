import React from 'react';
import '../css/resume.css';

const Resume = () => (
  <div className="resume">
    <div className="backgroundImage">
      <img src={require("../Photos/IMG_0981.jpg")} alt="Me with sunglasses."/>
    </div>

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
              <li>Expertise architecting applications on distributed, cloud-based, serverless systems.</li>
              <li>Proficiency across multiple cloud infrastructures (IaaS), languages, and tools.</li>
              <li>Experience developing algorithms for complex data analysis at packet level.</li>
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
          Go (Golang) | Javascript/ReactJS/AngularJS/JQuery/NodeJS | Python | MySql/Aurora | MongoDB | Redis | Elasticsearch | AWS | GCP | Docker | Git | HTML/CSS | Linux | Windows | RESTful APIs | CLIs | Project Planning | Agile
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
              <li>I build CLIs, APIs, UIs, and infrastructure to provide users with secure, monitored access to AWS resource, primarily via serverless architecture.</li>
              <li>PCI Compliance.</li>
              <li>Tech: Go(Golang), Javascript/ReactJS/NodeJS, bash scripting, AWS Lambda/Step Functions/DynamoDB/Cloudwatch/ECS/EC2/SSM.</li>
              <li>Infrastructure & CI/CD: AWS/ECS/ECR/DynamoDB, Terraform, Ansible, Docker, Git, Jenkins, Linux/RHEL/Debian/Windows.</li>
            </ul>
          </div>

          <div className="job">
            <h4>EvengX, LLC - Remote</h4>
            <div>2017-2018</div>
            <div>Lead Software Engineer</div>
            <ul className="jobDescription">
              <li>Lead a team in architecting a modular, extensible security/compliance platform that resides on distributed nodes on a network.</li>
              <li>Implemented 3rd party software into our platform including: Suricata, OSquery, Iptables, Windivert.</li>
              <li>Developed PaaS product modules which: quarantined infected machines, detected/blocked network attacks, detected malicious files, communicate w/ trusted endpoints, update status.</li>
              <li>Tech: Go(Golang), Python, MySql, MongoDB, Docker, Javascript/ReactJS/NodeJS, Bash scripting, C++.</li>
              <li>Infrastructure & CI/CD: AWS/ECS/ECR/Aurora, Docker, Git, Buildbot, Linux/RHEL/Debian/Windows.</li>
            </ul>
          </div>

          <div className="job">
            <h4>TrustPipe Security, LLC (acquired by EvengX, above) - Remote</h4>
            <div>2016-2017</div>
            <div>Software Engineer</div>
            <ul className="jobDescription">
              <li>Developed pattern-extracting algorithm for isolating key portions of network packets in detecting the "DNA" of network attacks, implementing the company's patents.</li>
              <li>Developed testing framework and user interface for running our product against malicious & non-malicious network traffic and storing/retrieving results.</li>
              <li>Tech: Go(Golang), Python, MySql, MongoDB, Javascript/ReactJS/NodeJS.</li>
              <li>Infrastructure & CI/CD: AWS/ECS/ECR/ElasticBeanstalk, Docker, Git, Jenkins, Linux/RHEL/Debian/Windows.</li>
            </ul>
          </div>

          <div className="job">
            <h4>Curt Group, LLC - Eau Claire, WI</h4>
            <div>2014-2016</div>
            <div>Web Developer II - eCommerce</div>
            <ul className="jobDescription">
              <li>Developed public API consumed by thousands of retailers, serving millions of requests. </li>
              <li>Implemented "Envision", a 3rd-party app that enabled users to visualize our products on their own vehicles.</li>
              <li>Engineered isomorphic apps to allow indexing by search engines while engaging users with speed and interactiveness.</li>
              <li>Tech: Go(Golang), Javascript/NodeJS/ReactJS/Angular/JQuery, C#, MySql, MongoDB, Redis, Elasticsearch.</li>
              <li>c Google Cloud/Compute Engine/App Engine/Kubernetes, Docker, Git, Jenkins, Drone.io, Nginx.</li>
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


export default Resume;
