import { PostBlock } from "@/components/postblock";
import { CommentBlock } from "@/components/commentblock";
import { ReplyBlock } from "@/components/replyblock";

export const MainPage: React.FC = () => {
	return (
		<div className='main max-w-7xl mx-auto'>
			<PostBlock/>
			<CommentBlock/>
			<ReplyBlock/>
		</div>
	);
};
