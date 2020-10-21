import React from 'react'
import Navbar from './Navbar'
import pub from '../assets/pub.png'

function PublicationRule() {
	return (
		<div >
			<div className="p-8 lg:pt-32  flex flex-col">
			<span className="text-center text-2xl font-bold">SUBMISSION GUIDELINES</span>
			<div className="mt-4">		
			<label className="lg:m-4  text font-semibold border-black lg:w-32"><span>	&#9830;</span>Eligibility</label>
				<p className="mx-12 lg:mx-24 mt-4 text">Students who are pursuing or have completed their law degree, Academicians, students pursuing Ph.D.</p>
			</div>	
			<div className="mt-4">		
			<label className="lg:m-4 text font-semibold border-black lg:w-32 mt-4"><span>	&#9830;</span>Theme</label>
				<p className="mx-12 lg:mx-24 mt-4 text">Any topic related to law.</p>
			</div>	
			<div className="mt-4">		
			<label className="lg:m-4 text font-semibold border-black lg:w-32 mt-4"><span >	&#9830;</span>Submission Guidelines</label>
				<ul  className="mx-12 lg:mx-24 mt-4 text list-disc">
 					 <li>The Script shall be original work and unpublished.</li>
 					 <li>The script should be in MS Word format& Pdf.</li>
 					 <li>The body of the script shall be in Times New Roman, & Font size 12, (Line spacing 1.5).</li>
 					 <li>The Footnotes of the script should be in Times New Roman, & Font size 10, (Line spacing single).</li>
 					 <li>A uniform Citation style must be followed while submitting the script.</li>
 					 <li>Co-authorship is allowed. There can be a maximum of three authors.</li>
 					 <li>Justified alignment should be maintained throughout the submission.</li>
 					 <li>Copyright over the published shall vest with ______.</li>
 					 <li>Please do not used a table of contents or numbered paragraphs, page borders, headers & footers in the script</li>
 					 <li>The manuscript must not contain any mention of or reference to the author’s name, affiliation or credentials. Such information must be restricted to a separate cover page, which must contain a brief biographical description of the author, and also include the author’s name, affiliation, qualifications and contact details.</li>
  
				</ul>
				<p className="mx-12 lg:mx-24 mt-4">The Indian Journal of Law & Governanceinvites original, unpublished script from all academicians, authors, legal professionals and from students across the globe under the following categories-
				</p>
				<ul  className="mx-12 lg:mx-24 mt-4 text list-disc mb-4">
 					 <li>Short Articles: (1000-3000 words, including footnotes),</li>
 					 <li>Long Articles: (300-5000 words, including footnotes),</li>
 					 <li>Book Reviews: (1500-3500 words, including footnotes),</li>
 					 <li>Case Comments: (1200-3000 words, including footnotes),</li>
 					 <li>Research Papers: (3500-8,000 words, including footnotes).</li>
 					
				</ul>
				<label className="mx-12 lg:mx-24 py-8 text-xl font-bold">
				**Note: Abstract should be upto 300 words only & 3-5 keywords.</label>
			</div>
			<div className="mt-4">		
			<label className="lg:m-4  text font-semibold border-black lg:w-32"><span>	&#9830;</span>Plagiarism Policy</label>
				<p className="mx-12 lg:mx-24 mt-4 text">A declaration must be made at the time of submission that the script is an original and unpublished work of the author(s), and that is not being considered for publication elsewhere. All the submission submitted for the publication to Indian Journal of Law & Governance must be plagiarism free. <span className="mx-12 lg:mx-24 py-8 text-xl font-bold">**Note: Journal shall not be responsible for any copyright violation or plagiarism issue.**</span></p>
			</div>	
			<div className="mt-4">		
			<label className="lg:m-4  text font-semibold border-black lg:w-32"><span>	&#9830;</span>Submission Procedure</label>
				<p className="mx-12 lg:mx-24 mt-4 text">All submissions must be emailed to __________________ with the subject as ‘Paper submission’ along with declaration to the effect that the Paper is an original work of an author and previously and unpublished work of the author.
				All papers must be accompanied by a ‘Conclusion’ stating the views and opinions of the authors on the subject. Authors can expect to receive their submission decisions within two months of submission.
				</p>
			</div>	
			<div className="mt-4">		
			<label className="lg:m-4  text font-semibold border-black lg:w-32"><span>	&#9830;</span>Publication Process: </label>
				<p className="mx-12 lg:mx-24 mt-4 text">Quarterly (3/4 issues per year)</p>
				<img  alt="Publication Process" />
			</div>		
			</div>
		</div>
	)
}

export default PublicationRule