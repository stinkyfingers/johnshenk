import React from 'react';

const ResumeText = ({ styles }) => {
  if (!styles) return null;
  return (
    <div className={styles.resume}>
      <div className={[styles.contact, styles.textblock].join(' ')}>
        <h1>John Shenk, Software Engineer</h1>
        <h2>Eau Claire, Wisconsin</h2>
        <div className={[styles.digits, styles.centerBox].join(' ' )}>
          <h3 className={styles.inlineHeader}><span className="small">email: </span>john_shenk@hotmail.com</h3>
          <h3 className={styles.inlineHeader}><span className="small">phone: </span>815-519-7025</h3>
          <h3 className={styles.nlineHeader}><span className="small">github: </span>github.com/stinkyfingers <a href="https://github.com/stinkyfingers" target="_blank" rel="noopener noreferrer">[go]</a></h3>
          <h3 className={styles.inlineHeader}><span className="small">bitbucket: </span>bitbucket.com/stinkyfingers<a href="https://bitbucket.com/stinkyfingers" target="_blank" rel="noopener noreferrer">[go]</a></h3>
        </div>
      </div>

      <div className={styles.empty} />

      <div className={[styles.objective, styles.textblock].join(' ')}>
        <div className={styles.centerBox}>
          <div className={styles.summary}>
            <div>
              Highly skilled software engineer with 10 years of experience in full-stack development, specializing in architecting applications for distributed, cloud-based environments.
              Proficient in multiple programming languages and cloud platforms, with a track record of building scalable and efficient solutions. Experienced leader and mentor.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.empty} />

      <div className={[styles.objective, styles.textblock].join(' ')}>
        <div className={styles.centerBox}>
          <h3>Expertise</h3>
          <div>
            Go (Golang) | Javascript | ReactJS | NodeJS | Python | MySql | Postgres | MongoDB | AWS | Docker | Kubernetes | Terraform | Git | HTML/CSS | Linux
          </div>
        </div>
      </div>

      <div className={styles.empty} />

      <div className={[styles.experience, styles.textblock].join(' ')}>
        <div className={styles.centerBox}>
          <div className={styles.leftAlign}>
            <h3>Experience</h3>

            <div className={styles.job}>
              <h4>Demand Analytics - Remote</h4>
              <div>2022-Present</div>
              <div>Software Engineer</div>
              <ul className={styles.jobDescription}>
                <li>Built API and UI for stadium seat mapping.</li>
                <li>Built API and UI for ticket management.</li>
                <li>Built API and UI for pricing guardrails.</li>
                <li>Built API and UI for historical sales comparison graphs & tables.</li>
                <li>Built ticket sales and pricing ETL processes.</li>
                <li>Built tools for sports event pricing management.</li>
                <li>Tech: Go(Golang), ReactJS, Python, Postgres.</li>
                <li>Infrastructure & CI/CD: AWS S3/RDS/ECR, Docker, Bitbucket Pipelines.</li>
              </ul>
            </div>

            <div className={styles.job}>
              <h4>Shipa.io - Remote</h4>
              <div>2021-2022</div>
              <div>Software Engineer</div>
              <ul className={styles.jobDescription}>
                <li>Built Kubernetes Controllers & CRDs designed to streamline application deployments and enforce deployment policies.</li>
                <li>Implemented Job, CronJob, License, & Environment management in Shipa.</li>
                <li>Implemented digestion of Custom Resource Events & Error Monitoring in Shipa.</li>
                <li>Maintain OSS project Ketch (theketch.io). Implemented support for K8s Jobs, CronJobs, managing CNAMEs, managing Environments, Framework yaml management, emission of “Ketch” CR Events.</li>
                <li>Mentored junior developers.</li>
                <li>Tech: Go(Golang), Kubernetes, Kubebuilder, Helm, bash scripting.</li>
                <li>Infrastructure & CI/CD: Github Actions, TravisCI, Dockerhub, AWS/GCP, Terraform.</li>
              </ul>
            </div>

            <div className={styles.job}>
              <h4>Rackspace - Remote</h4>
              <div>2018-2021</div>
              <div>Software Engineer III</div>
              <ul className={styles.jobDescription}>
                <li>Built CLI to provide customers ephemeral, monitored access to AWS EC2 resources via SSH through SSM tunnels.</li>
                <li>Built serverless APIs + backend to create, place, and retrieve temporary user credentials & ssh keys on AWS resources and provide resource state.</li>
                <li>Built web UI to provide authorized access to a user's AWS resource pool.</li>
                <li>Built web application & API to facilitate patching and schedule maintenance windows of cloud resource pools.</li>
                <li>Built web and CLI integration tests to assure proper functionality of components during CI runs.</li>
                <li>PCI Compliance.</li>
                <li>Hosted regular brown bag sessions demonstrating and explaining our tech.</li>
                <li>Tech: Go(Golang), Javascript/ReactJS/NodeJS, bash scripting, AWS Lambda/Step Functions/DynamoDB/Cloudwatch/EC2/SSM/S3.</li>
                <li>Infrastructure & CI/CD: AWS ECS/ECR/DynamoDB, Terraform, Ansible, Docker, Git, Github Actions, Jenkins, Linux/RHEL/Debian/Windows, CircleCI, Nginx.</li>
              </ul>
            </div>

            <div className={styles.job}>
              <h4>EvengX, LLC - Remote</h4>
              <div>2017-2018</div>
              <div>Lead Software Engineer</div>
              <ul className={styles.jobDescription}>
                <li>Lead a team in architecting a modular, extensible security/compliance platform that resides on distributed nodes on a network.</li>
                <li>Implemented 3rd party software into our platform including: Suricata, OSquery, Iptables, Windivert.</li>
                <li>Developed PaaS product modules which: quarantined infected machines, detected/blocked network attacks, detected malicious files, communicated w/ trusted endpoints, updated status.</li>
                <li>Tech: Go(Golang), Python, MySql, MongoDB, Docker, Javascript/ReactJS/NodeJS, Bash scripting, C++.</li>
                <li>Infrastructure & CI/CD: AWS ECS/ECR/Aurora, Docker, Git, Buildbot, Linux/RHEL/Debian/Windows.</li>
              </ul>
            </div>

            <div className={styles.job}>
              <h4>TrustPipe Security, LLC (acquired by EvengX, above) - Remote</h4>
              <div>2016-2017</div>
              <div>Software Engineer</div>
              <ul className={styles.jobDescription}>
                <li>Developed pattern-matching & pattern-extracting algorithms for identifying nth-degree Longest Common Substrings (LCS) using Directional Acyclic Graphs (DAG).</li>
                <li>Developed applications for isolating and learning key portions of network packets (the "DNA" of network attacks), implementing the company's patents.</li>
                <li>Developed testing framework and user interface for running our product against malicious & non-malicious network traffic and storing/retrieving results & Packet Captures (PCAPs).</li>
                <li>Tech: Go(Golang), Python, MySql, MongoDB, Javascript/ReactJS/NodeJS.</li>
                <li>Infrastructure & CI/CD: AWS ECS/ECR/ElasticBeanstalk, Docker, Git, Jenkins, Linux/RHEL/Debian/Windows.</li>
              </ul>
            </div>

            <div className={styles.job}>
              <h4>Curt Group, LLC - Eau Claire, WI</h4>
              <div>2014-2016</div>
              <div>Web Developer II - eCommerce</div>
              <ul className={styles.jobDescription}>
                <li>Developed public API for vehicle part fitment consumed by thousands of retailers, serving millions of requests.</li>
                <li>Build multiple consumer-facing company websites.</li>
                <li>Implemented "Envision", a 3rd-party app that enabled users to visualize our products on their own vehicles.</li>
                <li>Engineered isomorphic apps to allow indexing by search engines for SEO benefits.</li>
                <li>Tech: Go(Golang), Javascript/NodeJS/ReactJS/AngularJS/JQuery, C#, MySql, MongoDB, Redis, Elasticsearch.</li>
                <li>Infrastructure & CI/CD: Google Cloud (GCP), Compute Engine, App Engine, Kubernetes, Docker, Git, Jenkins, Drone.io, Nginx.</li>
              </ul>
            </div>

            <div className={styles.job}>
              <h4>JB Systems, LLC - Eau Claire, WI</h4>
              <div>Jan - June 2014</div>
              <div>Developer Intern</div>
              <ul className={styles.jobDescription}>
                <li>Developed web applications for scheduling/attending conferences, tracking product inventory, and scheduling shuttles.</li>
                <li>Tech: PHP, MySql, Javascript/JQuery, Codeigniter, HTML/CSS.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.empty} />

      <div className={styles.textblock}>
        <div className={styles.centerBox}>
          <div className={styles.leftAlign}>

            <h3>Degrees</h3>
            <div>
              <div className={styles.job}>
                <h4>AS in IT/ Software Development</h4>
                <div>2014</div>
                <div>Chippewa Valley Technical College</div>
              </div>
            </div>

            <div>
              <div className={styles.job}>
                <h4>MBA</h4>
                <div>2003</div>
                <div>University Of Illinois at Chicago</div>
              </div>
            </div>

            <div>
              <div className={styles.job}>
                <h4>BS in Mass Communications</h4>
                <div>2000</div>
                <div>Illinois State University</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.empty} />

      <div className={styles.textblock}>
        <div className={styles.leftAlign}>
          <h3>Certificates</h3>
          <div>
            <div className={styles.job}>
              <h4>IT Database Analyst and Management</h4>
              <div>2013</div>
              <div>Chippewa Valley Technical College</div>
            </div>
          </div>

          <div>
            <div className={styles.job}>
              <h4>IT Mobile Application Development (Android)</h4>
              <div>2013</div>
              <div>Chippewa Valley Technical College</div>
            </div>
          </div>

          <div>
            <div className={styles.job}>
              <h4>IT .NET Programming</h4>
              <div>2013</div>
              <div>Chippewa Valley Technical College</div>
            </div>
          </div>

          <div>
            <div className={styles.job}>
              <h4>IT Java</h4>
              <div>2014</div>
              <div>Chippewa Valley Technical College</div>
            </div>
          </div>

          <div>
            <div className={styles.job}>
              <h4>IT Web Development</h4>
              <div>2014</div>
              <div>Chippewa Valley Technical College</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.empty} />

      <div className={styles.textblock}>
        <div className={styles.centerBox}>
          <div className={styles.leftAlign}>
            <h3>Professional References</h3>
            <div><a href="https://www.linkedin.com/in/dvalente/">Doug Valente, VP, Tideworks (fomerly COO, EvengX)</a></div>
            <div><a href="https://www.linkedin.com/in/martinquiroga/">Martín Quiroga, Product Manager, Lending Club (formerly Development Manager, EvengX)</a></div>
            <div><a href="https://www.linkedin.com/in/rjune/">Rebecca June, Project Manager, Evengx</a></div>
            <div><a href="https://www.linkedin.com/in/p-j-mcginley-90b6171a/">PJ McGinley, eCommerce Bus. Manager, CUNA Mutual (formerly eCommerce Manager, Curt)</a></div>
            <div><a href="https://www.linkedin.com/in/broc-seigneurie-24076449/">Broc Seigneurie, Developer, CVTC  (former Coworker)</a></div>
            <div><a href="https://www.linkedin.com/in/ninnemana/">Alex Ninneman, eCommerce Dev,  PowerChord (formerly Development Manager, Curt)</a></div>
          </div>
        </div>
      </div>

      <div className={styles.empty} />

      <div className={styles.textblock}>
        <div className={styles.centerBox}>
          <div className={styles.leftAlign}>
            <h3>Etc.</h3>
            <div>Publication: &nbsp;
              <a href="https://medium.com/@johnshenk77/testing-kubernetes-event-watchers-in-golang-a22eab17a1df" target="_blank" rel="noopener noreferrer">
                Testing Kubernetes Event Watchers</a>
            </div>
            <div>Publication: &nbsp;
              <a href="https://medium.com/@johnshenk77/ketch-jobs-a1069202cf97" target="_blank" rel="noopener noreferrer">
                Managing Jobs with Ketch</a>
            </div>
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
}


export default ResumeText;
